# Barrett Racing v0.1.0

Standalone installable Progressive Web App for Android Chrome. The home page includes the two supplied car illustrations and four auto-saved PSI inputs.

## Publish with GitHub Pages

1. Create a **new** GitHub repository (for example `barrett-racing`).
2. Upload the **contents** of this folder to the repository root (not the outer folder).
3. In repository **Settings → Pages**, select **Deploy from a branch**, branch **main**, folder **/(root)** and save.
4. Wait for Pages to publish, then visit the HTTPS URL shown under Pages using Android Chrome.
5. Open Chrome's menu (⋮) and choose **Install app** if offered. Android/Chrome labels may vary; installability depends on browser checks and secure hosting.
6. Open Barrett Racing from the phone's app launcher; it should run in a standalone window. After initial load it should also work offline.

Do not use `raw.githubusercontent.com` as the app URL; use the `github.io` GitHub Pages address. The service worker requires HTTPS or localhost and won't register from a downloaded file opened as `file://`.

## Data

PSI values are stored locally in the installed app's browser storage. Clearing app/browser data may erase them. This version does not sync values between devices.
