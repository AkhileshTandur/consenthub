# ConsentHub — Unified Data Permission Wallet (MVP)

A hiring-portfolio web app that centralizes OAuth-style data permissions across services, logs "data-use receipts," and lets users grant or revoke access with one click.

## Quick start (Docker)
```bash
docker compose up
```
Open http://localhost:5173 and click **Seed Demo Services**.

## Local dev (without Docker)
1. Start Postgres and create database `consenthub`.
2. In `backend/`, copy `.env.example` to `.env` and adjust `DATABASE_URL`.
3. `npm i` then `npm run dev`
4. In `frontend/`, `npm i` then `npm run dev`

## What this MVP shows
- Services directory
- Consent records (grant/revoke)
- Simple audit trail (DB rows)
- API-first backend with TypeScript
- React front-end with proxy to backend

## Next steps (for resume wow-factor)
- OAuth proxy that injects/rotates tokens and writes data-use receipts
- Scoped, time-limited consents and scheduled expiry
- Webhooks to auto-revoke upon anomalies
- Exportable, signed consent receipts (JSON Web Signature)
- Differential privacy counters for aggregate analytics
