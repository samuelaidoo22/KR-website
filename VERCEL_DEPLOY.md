# Deploying to Vercel

This project is a Next.js (app router) site. Vercel is recommended because it fully supports Next.js features.

Quick steps (web UI)

1. Go to https://vercel.com and sign in (use GitHub to simplify repo linking).
2. Click **New Project** → **Import Git Repository** and select `samuelaidoo22/KR-website`.
3. Confirm Framework Preset: **Next.js**. Leave build & output settings at their defaults (`npm run build`).
4. Deploy. Vercel will create Preview and Production deployments for pushes.

CLI (optional)

```powershell
npm i -g vercel
vercel login
cd "D:\All Programming Project Folder\KR-website"
vercel    # follow interactive prompts; use --prod for a production deploy
```

Notes
- You used Git LFS for `public/pics` — Vercel fetches the repo from GitHub; ensure LFS objects are present on GitHub (they are).
- Do not use `next export` for this app-router site; Vercel will build and serve the app correctly.
