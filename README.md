# Ghar Meals

Offline-first PWA: pantry stock -> next-day meal plan -> Marathi cook mode -> macros.
Vanilla HTML/JS, no build step. Eggitarian Indian recipe DB in `data.js`.

## Run locally
```
python -m http.server 8080
```
Open http://localhost:8080 . Append `?test` to run the self-check.

## Deploy
GitHub Pages from `main` root. Install to Home Screen on phones (required on iOS for storage to persist).

## Sync (optional, Firestore free tier)
1. Firebase console -> create project -> Firestore (production mode).
2. Rules tab, paste:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{db}/documents {
    match /households/{code} { allow read, write: if code.size() >= 16; }
  }
}
```
3. Project settings -> Your apps -> Web app -> copy config into `firebase-config.js`.
4. In the app: Settings -> Generate household code -> share the same code on every phone.

Household code is the only secret. Last write wins; fine for one household.

## Edit recipes / items
`data.js`. Quantities are per serving (g / ml / pc). Steps are Marathi (cook mode speaks them).
