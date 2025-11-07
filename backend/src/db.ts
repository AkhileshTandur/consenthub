import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/consenthub'
});

export async function migrate() {
  await pool.query(`
  CREATE TABLE IF NOT EXISTS services (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    oauth_authorize_url TEXT,
    oauth_token_url TEXT,
    scopes TEXT[],
    created_at TIMESTAMP DEFAULT NOW()
  );
  CREATE TABLE IF NOT EXISTS consents (
    id UUID PRIMARY KEY,
    user_id TEXT NOT NULL,
    service_id TEXT NOT NULL REFERENCES services(id) ON DELETE CASCADE,
    scopes TEXT[] NOT NULL,
    status TEXT NOT NULL CHECK (status IN ('granted','revoked')),
    created_at TIMESTAMP DEFAULT NOW()
  );
  `);
}

migrate().catch((e) => {
  console.error("Migration failed", e);
  process.exit(1);
});
