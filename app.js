import { ITEMS, RECIPES } from './data.js';
import { firebaseConfig } from './firebase-config.js';

const $ = s => document.querySelector(s);
const KEY = 'mp1', DAY = 864e5;
const SLOTS = { b: 'Breakfast', l: 'Lunch', d: 'Dinner' };
const SLOTS_MR = { b: 'नाश्ता', l: 'दुपारचे जेवण', d: 'रात्रीचे जेवण' };
const UNIT_MR = { g: 'ग्रॅम', ml: 'मिली', pc: 'नग' };
const R = Object.fromEntries(RECIPES.map(r => [r.id, r]));
const dkey = t => { const x = new Date(t); return `${x.getFullYear()}-${String(x.getMonth() + 1).padStart(2, '0')}-${String(x.getDate()).padStart(2, '0')}`; };
const today = () => dkey(Date.now()), tomorrow = () => dkey(Date.now() + DAY);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// ---------- state ----------
let S = JSON.parse(localStorage.getItem(KEY) || 'null') || { prefs: { servings: 2, egg: true, kcal: 1800, house: '' }, inv: {}, plans: {}, log: [], updatedAt: 0 };
let push = null, tab = 'plan', planDate = tomorrow(), search = '', cookId = null, cookStep = 0, syncStatus = 'local only';
// leftovers expire after 2 days
for (const [id, e] of Object.entries(S.inv)) if (ITEMS[id]?.cat === 'leftover' && e.q > 0 && Date.now() - e.at > 2 * DAY) e.q = 0;

function save() { S.updatedAt = Date.now(); localStorage.setItem(KEY, JSON.stringify(S)); push?.(); render(); }
const qty = id => S.inv[id]?.q || 0;
const setQty = (id, q) => { S.inv[id] = { q: Math.max(0, Math.round(q * 100) / 100), at: Date.now() }; };
const need = (r, id) => r.ing[id] * S.prefs.servings;
const fmt = (q, u) => (u === 'pc' ? (Math.round(q * 4) / 4) : Math.round(q)) + ' ' + u;

// ---------- planner ----------
function macros(r) { // per serving [kcal, protein, carb, fat]
  const m = [0, 0, 0, 0];
  for (const [id, q] of Object.entries(r.ing)) { const it = ITEMS[id], f = it.unit === 'pc' ? q : q / 100; it.n.forEach((v, i) => m[i] += v * f); }
  return m.map(Math.round);
}
function score(r) {
  if (r.egg && !S.prefs.egg) return -1e9;
  const ids = Object.keys(r.ing); let have = 0, left = 0;
  for (const id of ids) {
    const it = ITEMS[id], ok = qty(id) >= need(r, id) * 0.8;
    if (it.cat === 'leftover') { if (!qty(id)) return -1e9; left++; }
    if (ok) have++;
  }
  const main = ids.reduce((a, b) => (r.ing[a] * (ITEMS[a].unit === 'pc' ? 50 : 1)) >= (r.ing[b] * (ITEMS[b].unit === 'pc' ? 50 : 1)) ? a : b);
  const recent = S.log.filter(l => l.r === r.id && Date.now() - l.t < 3 * DAY).length;
  return have / ids.length * 10 - (qty(main) < need(r, main) * 0.8 ? 5 : 0) + left * 5 - recent * 4 + Math.random() * 0.3;
}
const ranked = (slot, role, excl = []) => RECIPES.filter(r => r.slots.includes(slot) && r.role === role && !excl.includes(r.id))
  .map(r => [score(r), r]).sort((a, b) => b[0] - a[0]);
function plan(date, slots) {
  const P = S.plans[date] = S.plans[date] || {};
  const used = () => Object.values(P).flat();
  for (const s of slots) {
    if (s === 'b') { const t = ranked('b', 'main', used())[0]; P.b = t ? [t[1].id] : []; continue; }
    const combo = ['grain', 'dal', 'sabzi'].map(role => ranked(s, role, used())[0]).filter(Boolean);
    const meal = ranked(s, 'meal', used())[0];
    const cs = combo.length === 3 ? combo.reduce((a, x) => a + x[0], 0) / 3 : -1e9;
    P[s] = meal && meal[0] > cs ? [meal[1].id] : combo.map(x => x[1].id);
  }
}
function swap(date, slot, i) {
  const P = S.plans[date], cur = R[P[slot][i]];
  const c = ranked(slot, cur.role, Object.values(P).flat()).slice(0, 3);
  if (c.length) P[slot][i] = c[Math.floor(Math.random() * c.length)][1].id;
}
function cooked(date, slot, id) {
  const r = R[id];
  for (const k of Object.keys(r.ing)) setQty(k, qty(k) - need(r, k));
  S.log.push({ t: Date.now(), date, slot, r: id, sv: S.prefs.servings });
}
const isDone = (date, slot, id) => S.log.some(l => l.date === date && l.slot === slot && l.r === id);
function shopping(date) {
  const needs = {};
  for (const ids of Object.values(S.plans[date] || {})) for (const id of ids) for (const k of Object.keys(R[id].ing)) needs[k] = (needs[k] || 0) + need(R[id], k);
  return Object.entries(needs).filter(([k]) => ITEMS[k].cat !== 'leftover').map(([k, n]) => [k, n - qty(k)]).filter(x => x[1] > 0.01);
}
function dayMacros(date) {
  const m = [0, 0, 0, 0];
  for (const l of S.log.filter(l => l.date === date)) macros(R[l.r]).forEach((v, i) => m[i] += v);
  return m;
}

// ---------- voice ----------
let voice = null;
function pickVoice() { const v = speechSynthesis.getVoices(); voice = v.find(x => x.lang.startsWith('mr')) || v.find(x => x.lang.startsWith('hi')) || null; }
if ('speechSynthesis' in window) { speechSynthesis.onvoiceschanged = pickVoice; pickVoice(); }
function speak(t) {
  if (!('speechSynthesis' in window)) return alert('No voice on this phone');
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(t); u.lang = voice?.lang || 'mr-IN'; if (voice) u.voice = voice; u.rate = 0.85;
  speechSynthesis.speak(u);
}
let wake = null;
async function keepAwake() { try { wake = wake || await navigator.wakeLock?.request('screen'); } catch { } }

// ---------- sync ----------
async function initSync() {
  if (!firebaseConfig) { syncStatus = 'no firebase-config.js'; return; }
  if (!S.prefs.house) { syncStatus = 'no household code'; return; }
  try {
    const V = '10.14.1';
    const [{ initializeApp }, { getFirestore, doc, setDoc, onSnapshot }] = await Promise.all([
      import(`https://www.gstatic.com/firebasejs/${V}/firebase-app.js`),
      import(`https://www.gstatic.com/firebasejs/${V}/firebase-firestore.js`)]);
    const ref = doc(getFirestore(initializeApp(firebaseConfig)), 'households', S.prefs.house);
    // ponytail: whole-state doc, last-write-wins. Per-field merge if two phones edit offline at once.
    onSnapshot(ref, snap => {
      const d = snap.data();
      if (d && d.updatedAt > S.updatedAt) { S = d; localStorage.setItem(KEY, JSON.stringify(S)); render(); }
      syncStatus = 'synced'; render();
    }, () => { syncStatus = 'sync error (rules?)'; render(); });
    push = () => setDoc(ref, S).catch(() => { });
    if (S.updatedAt) push();
    syncStatus = 'connecting…';
  } catch { syncStatus = 'offline'; }
  render();
}

// ---------- views ----------
const V = {
  stock() {
    const q = search.toLowerCase();
    const items = Object.values(ITEMS).filter(i => !q || i.en.toLowerCase().includes(q) || i.mr.includes(q));
    const row = i => `<div class="row"><div class="g">${esc(i.en)}<div class="small">${esc(i.mr)}</div></div>
      <button data-a="dec" data-id="${i.id}">−</button>
      <input class="q" type="number" inputmode="decimal" data-a="qty" data-id="${i.id}" value="${qty(i.id)}"><span class="small">${i.unit}</span>
      <button data-a="inc" data-id="${i.id}">+</button></div>`;
    const grp = (t, f) => { const l = items.filter(f); return l.length ? `<h3>${t}</h3>` + l.map(row).join('') : ''; };
    return `<h2>Stock</h2><input placeholder="Search item…" data-a="search" value="${esc(search)}">
      ${grp('Leftovers (auto-clear after 2 days)', i => i.cat === 'leftover')}
      ${grp('In stock', i => i.cat !== 'leftover' && qty(i.id) > 0)}
      ${grp('Not in stock', i => i.cat !== 'leftover' && !qty(i.id))}`;
  },
  plan() {
    const P = S.plans[planDate] || {};
    const dish = (slot, id, i) => { const r = R[id], m = macros(r), d = isDone(planDate, slot, id); return `
      <div class="row ${d ? 'done' : ''}"><div class="g">${esc(r.en)}<div class="small">${esc(r.mr)} · ${m[0]} kcal · ${m[1]}g protein</div></div>
      ${d ? '' : `<button class="s" data-a="swap" data-slot="${slot}" data-i="${i}">↻</button><button class="p" data-a="cooked" data-slot="${slot}" data-id="${id}">✓</button>`}</div>`; };
    const tot = [0, 0, 0, 0]; for (const ids of Object.values(P)) for (const id of ids) macros(R[id]).forEach((v, i) => tot[i] += v);
    const shop = shopping(planDate);
    const tried = new Set(S.log.map(l => l.r));
    const ideas = RECIPES.filter(r => !tried.has(r.id)).map(r => [score(r), r]).sort((a, b) => b[0] - a[0]).slice(0, 5);
    return `<h2>Plan</h2>
      <div class="row"><button class="${planDate === today() ? 'p' : ''}" data-a="date" data-d="${today()}">Today</button><button class="${planDate === tomorrow() ? 'p' : ''}" data-a="date" data-d="${tomorrow()}">Tomorrow</button></div>
      <div class="row">${Object.entries(SLOTS).map(([k, v]) => `<label class="row"><input type="checkbox" data-slot="${k}" ${P[k] ? '' : 'checked'}> ${v}</label>`).join('')}</div>
      <button class="p" data-a="plan" style="width:100%">Make plan for ${planDate}</button>
      ${Object.entries(SLOTS).map(([k, v]) => P[k] ? `<div class="card"><b>${v}</b>${P[k].map((id, i) => dish(k, id, i)).join('')}</div>` : '').join('')}
      ${Object.keys(P).length ? `<div class="small">Day total per person: ${tot[0]} kcal · P ${tot[1]}g · C ${tot[2]}g · F ${tot[3]}g (target ${S.prefs.kcal} kcal)</div>` : ''}
      ${shop.length ? `<div class="card"><b>Shopping list</b>${shop.map(([k, n]) => `<div class="row"><div class="g">${esc(ITEMS[k].en)}</div><span>${fmt(n, ITEMS[k].unit)}</span></div>`).join('')}</div>` : ''}
      <div class="card"><b>New ideas from your stock</b>${ideas.map(([s, r]) => `<div class="row"><div class="g">${esc(r.en)}<div class="small">${esc(r.mr)} · ${Object.keys(r.ing).filter(k => qty(k) < need(r, k) * 0.8).length} missing</div></div><button class="s" data-a="cook" data-id="${r.id}">👩‍🍳</button></div>`).join('')}</div>`;
  },
  cook() {
    if (!cookId) {
      const list = [today(), tomorrow()].map(d => Object.entries(S.plans[d] || {}).map(([s, ids]) => ids.map(id => ({ d, s, id }))).flat()).flat();
      return `<div class="cook"><h2>आज काय बनवायचं?</h2>${list.length ? list.map(x => `<button class="s" style="width:100%;text-align:left;margin:6px 0" data-a="cook" data-id="${x.id}">${esc(R[x.id].mr)}<div class="small">${x.d === today() ? 'आज' : 'उद्या'} · ${SLOTS_MR[x.s]}</div></button>`).join('') : '<p class="small">No plan yet. Make one in Plan tab.</p>'}</div>`;
    }
    const r = R[cookId];
    const ing = Object.entries(r.ing).map(([k, q]) => `${ITEMS[k].mr} ${fmt(q * S.prefs.servings, '')} ${UNIT_MR[ITEMS[k].unit]}`);
    return `<div class="cook"><button class="s" data-a="cookback" style="flex:0">← मागे</button><h2>${esc(r.mr)}</h2>
      <div class="small">${S.prefs.servings} जणांसाठी</div>
      <div class="row"><button data-a="say" data-t="${esc('साहित्य: ' + ing.join(', '))}">साहित्य ऐका</button></div>
      <ul>${ing.map(x => `<li>${esc(x)}</li>`).join('')}</ul>
      ${r.steps.map((s, i) => `<div class="step ${i === cookStep ? 'on' : ''}" data-a="step" data-i="${i}">${i + 1}. ${esc(s)}</div>`).join('')}
      <div class="row"><button data-a="prev">◀</button><button class="p" data-a="say" data-t="${esc(r.steps[cookStep])}">🔊 ऐका</button><button data-a="next">▶</button></div></div>`;
  },
  stats() {
    const days = [...Array(7)].map((_, i) => dkey(Date.now() - (6 - i) * DAY));
    const ms = days.map(dayMacros), mx = Math.max(S.prefs.kcal, ...ms.map(m => m[0]));
    const t = dayMacros(today());
    return `<h2>Stats</h2><div class="card"><b>Today (per person)</b><div>${t[0]} kcal of ${S.prefs.kcal}</div><div class="small">Protein ${t[1]}g · Carbs ${t[2]}g · Fat ${t[3]}g</div></div>
      <div class="card"><b>Last 7 days, kcal</b><div class="bars">${ms.map(m => `<div class="bar ${m[0] > S.prefs.kcal ? '' : 't'}" style="height:${m[0] / mx * 100}%" title="${m[0]}"></div>`).join('')}</div>
      <div class="lbl">${days.map(d => `<span>${d.slice(8)}</span>`).join('')}</div>
      <div class="small">Protein avg: ${Math.round(ms.reduce((a, m) => a + m[1], 0) / 7)} g/day</div></div>
      <div class="card"><b>Cooked log</b>${S.log.slice(-15).reverse().map(l => `<div class="small">${l.date} ${SLOTS[l.slot]}: ${esc(R[l.r].en)}</div>`).join('') || '<div class="small">Nothing yet</div>'}</div>`;
  },
  set() {
    return `<h2>Settings</h2>
      <div class="row"><div class="g">People (servings)</div><input class="q" type="number" data-a="pref" data-k="servings" value="${S.prefs.servings}"></div>
      <div class="row"><div class="g">Eggs OK</div><input type="checkbox" data-a="pref" data-k="egg" ${S.prefs.egg ? 'checked' : ''}></div>
      <div class="row"><div class="g">Daily kcal target</div><input class="q" type="number" data-a="pref" data-k="kcal" value="${S.prefs.kcal}"></div>
      <div class="card"><b>Sync</b> <span class="small">${esc(syncStatus)}</span>
        <div class="row"><input placeholder="Household code" data-a="pref" data-k="house" value="${esc(S.prefs.house)}"><button data-a="gen">New</button></div>
        <div class="small">Same code on every phone. Reload after changing. Setup: see README.</div></div>
      <div class="card"><b>Backup</b><textarea id="bk" rows="3">${esc(JSON.stringify(S))}</textarea>
        <div class="row"><button data-a="import">Import from box</button><button data-a="reset">Reset all</button></div></div>
      <div class="small">Voice: ${voice ? voice.name + ' (' + voice.lang + ')' : 'none found'}</div>`;
  }
};
function render() {
  $('#app').innerHTML = V[tab]();
  document.querySelectorAll('nav button').forEach(b => b.classList.toggle('on', b.dataset.tab === tab));
}

// ---------- events ----------
document.addEventListener('click', e => {
  const b = e.target.closest('[data-tab],[data-a]'); if (!b) return;
  if (b.dataset.tab) { tab = b.dataset.tab; if (tab === 'cook') keepAwake(); return render(); }
  const a = b.dataset.a, d = b.dataset;
  const act = {
    inc: () => { setQty(d.id, qty(d.id) + (ITEMS[d.id].unit === 'pc' ? 1 : 50)); save(); },
    dec: () => { setQty(d.id, qty(d.id) - (ITEMS[d.id].unit === 'pc' ? 1 : 50)); save(); },
    date: () => { planDate = d.d; render(); },
    plan: () => { const slots = [...document.querySelectorAll('input[data-slot]:checked')].map(x => x.dataset.slot); if (!slots.length) return; plan(planDate, slots); save(); },
    swap: () => { swap(planDate, d.slot, +d.i); save(); },
    cooked: () => { cooked(planDate, d.slot, d.id); save(); },
    cook: () => { cookId = d.id; cookStep = 0; tab = 'cook'; keepAwake(); render(); },
    cookback: () => { cookId = null; speechSynthesis?.cancel(); render(); },
    step: () => { cookStep = +d.i; render(); speak(R[cookId].steps[cookStep]); },
    prev: () => { cookStep = Math.max(0, cookStep - 1); render(); speak(R[cookId].steps[cookStep]); },
    next: () => { cookStep = Math.min(R[cookId].steps.length - 1, cookStep + 1); render(); speak(R[cookId].steps[cookStep]); },
    say: () => speak(d.t),
    gen: () => { S.prefs.house = crypto.randomUUID().replace(/-/g, ''); save(); },
    import: () => { try { S = JSON.parse($('#bk').value); save(); } catch { alert('Bad JSON'); } },
    reset: () => { if (confirm('Erase everything on this phone?')) { localStorage.removeItem(KEY); location.reload(); } }
  };
  act[a]?.();
});
document.addEventListener('change', e => {
  const t = e.target, d = t.dataset;
  if (d.a === 'qty') { setQty(d.id, +t.value || 0); save(); }
  if (d.a === 'pref') { S.prefs[d.k] = t.type === 'checkbox' ? t.checked : t.type === 'number' ? +t.value : t.value.trim(); save(); }
});
document.addEventListener('input', e => { if (e.target.dataset.a === 'search') { search = e.target.value; const v = e.target.value; render(); const i = $('[data-a=search]'); i.focus(); i.setSelectionRange(v.length, v.length); } });

// ---------- boot ----------
render();
initSync();
if ('serviceWorker' in navigator && location.protocol !== 'file:') navigator.serviceWorker.register('sw.js');

// self-check: open ?test
if (location.search === '?test') {
  const bak = JSON.stringify(S);
  for (const id in ITEMS) setQty(id, 1000);
  plan(tomorrow(), ['b', 'l', 'd']);
  const P = S.plans[tomorrow()];
  const ok = ['b', 'l', 'd'].every(s => P[s].length >= 1) && P.l.every(id => macros(R[id])[0] > 0) && shopping(tomorrow()).length === 0
    && RECIPES.every(r => Object.keys(r.ing).every(k => ITEMS[k]) || console.error('bad item in', r.id));
  S = JSON.parse(bak); render();
  alert(ok ? 'SELF-CHECK OK' : 'SELF-CHECK FAILED (see console)');
}
