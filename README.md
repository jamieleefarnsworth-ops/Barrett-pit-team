# Car #10 Pit Crew — initial test build

## Included
- Black / blue / orange, mobile-first car diagram, LF/RF/LR/RR tap-to-edit.
- Cold/hot PSI, camber and ride height entry, append-only adjustment history.
- Manual session lap time and grip recording.
- Garage issue tracking with resolution date.
- Local-only browser storage, JSON backup/restore, basic service-worker offline shell.
- Four-tab bottom navigation.

## Not implemented (do not use for live racing data yet)
- Supabase, multi-phone sync, offline conflict resolution, QR pairing and revocation.
- Reliable background update deferral, weather feed, rulebook compliance, tire IDs, tire temperatures, advanced advisor, PDF reports.
- Durable IndexedDB storage (current prototype uses localStorage, which can be cleared by browser/device).

## Test locally
Serve this folder over HTTPS or localhost (service workers do not run from file://):
`python3 -m http.server 8000` then open `http://localhost:8000`.
To deploy on GitHub Pages, publish these files in a repository. Do not publish sensitive Supabase credentials. This build has no backend.

## Next engineering milestone
Design Supabase schema, RLS/device authorization, append-only events, IndexedDB write queue, conflict detection and test/live environment separation before inviting other crew devices.
