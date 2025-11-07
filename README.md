🚀 ConsentHub — Unified Data Permission Wallet

ConsentHub is a full-stack web application that centralizes user data permissions across multiple services.
It allows users to view, grant, revoke, and eventually audit access to their data — all from one elegant dashboard.

🛡️ Privacy-by-design for the modern web — give users control of their data.

🌟 Features

✅ Unified Consent Dashboard — Manage permissions for all connected apps in one place.
✅ Grant / Revoke Access — Real-time control with a single click.
✅ Service Directory — Easily add or seed demo services.
✅ Audit Trail (Future Feature) — Record “data-use receipts” for every access event.
✅ Professional UI — Clean, responsive React interface with glassmorphism styling.
✅ Containerized Setup — Run the entire stack with one command via Docker.

🧱 Tech Stack
Layer	Technology	Purpose
Frontend	React + Vite	Responsive user dashboard
Backend	Node.js (TypeScript) + Express	REST API for services and consents
Database	PostgreSQL	Stores users, services, and consent data
DevOps	Docker & Docker Compose	One-command local setup
Validation	Zod	Type-safe input validation
ORM / Query	pg (node-postgres)	Database queries
Version Control	Git + GitHub	Source management and CI/CD
🖥️ Demo Preview
Dashboard	Grant Access	Revoke Access

	
	

🎨 UI built with modern gradients, depth, and interactive elements for a SaaS-grade feel.

⚙️ Getting Started
🧰 Prerequisites

Docker Desktop
 installed and running

(Optional) Node.js 20+
 if you want to run locally without Docker

▶️ Run with Docker (recommended)
# Clone the repository
git clone https://github.com/AkhileshTandur/consenthub.git
cd consenthub

# Start all services (frontend, backend, database)
docker compose up


App URLs:

Frontend → http://localhost:5173

Backend API → http://localhost:4000/api/health

🧑‍💻 Local Development (without Docker)
Backend
cd backend
cp .env.example .env
npm install
npm run dev

Frontend
cd frontend
npm install
npm run dev


Then open http://localhost:5173

🗂️ Project Structure
consenthub/
│
├── backend/
│   ├── src/
│   │   ├── index.ts          # Entry point (Express app)
│   │   ├── db.ts             # Database connection & migration
│   │   └── routes/           # API routes for consents & services
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx           # React UI
│   │   └── main.jsx
│   ├── vite.config.js
│   └── package.json
│
├── docker-compose.yml         # Multi-container setup
└── README.md

🧠 How It Works

Frontend sends API calls to the backend using Axios.

Backend validates requests and interacts with PostgreSQL to store consent data.

Database maintains three main tables:

services: List of available apps (like Cloud Drive, Health Tracker)

consents: Who granted what access

receipts: (planned) Audit records for data access events

🔒 Future Enhancements
Feature	Description
🕒 Time-limited consents	Auto-revoke after expiry
🧾 Data-use receipts	Track when and how data is accessed
🔑 OAuth Proxy Integration	Real-world API authorization
📊 Analytics Dashboard	Privacy metrics with differential privacy
📩 Email Notifications	Alerts for unusual access or expiry
🧪 Testing
# In backend/
npm run test


(You can integrate Jest or Vitest for future unit and integration tests.)

🛠️ Deployment

You can easily deploy ConsentHub using any cloud platform:

Render / Railway → backend Node service

Neon / Supabase → PostgreSQL database

Vercel / Netlify → frontend React app

Add your DATABASE_URL environment variable in the backend service settings.

📄 License

This project is licensed under the MIT License — see LICENSE
 for details.

🙌 Acknowledgments

Designed and developed by Akhilesh Tandur

Built for portfolio demonstration and full-stack job readiness

Inspired by modern SaaS dashboards and data privacy standards (GDPR/CCPA)
