// Network-first, cache fallback. Bump C to force clients to drop old cache.
const C = 'mp-v1';
const SHELL = ['./', './index.html', './app.js', './data.js', './firebase-config.js', './manifest.json', './icon-192.png', './icon-512.png'];
const cacheable = u => u.startsWith(self.location.origin) || u.includes('gstatic.com/firebasejs');

self.addEventListener('install', e => e.waitUntil(caches.open(C).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(
  caches.keys().then(ks => Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || !cacheable(e.request.url)) return;
  e.respondWith(fetch(e.request).then(res => {
    if (res.ok) caches.open(C).then(c => c.put(e.request, res.clone()));
    return res;
  }).catch(() => caches.match(e.request, { ignoreSearch: true })));
});
