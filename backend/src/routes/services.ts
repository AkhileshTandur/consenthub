import { Router } from "express";
import { pool } from "../db.js";
export const router = Router();

router.get("/", async (_req, res) => {
  const { rows } = await pool.query("SELECT * FROM services ORDER BY name");
  res.json(rows);
});

router.post("/seed", async (_req, res) => {
  // Minimal seed: two pretend services
  await pool.query("DELETE FROM services");
  await pool.query(
    "INSERT INTO services (id,name,oauth_authorize_url,oauth_token_url,scopes) VALUES ($1,$2,$3,$4,$5),($6,$7,$8,$9,$10)",
    [
      "drive","Cloud Drive","https://example.com/oauth/authorize","https://example.com/oauth/token", ["files.read","files.write"],
      "health","Health Tracker","https://example.com/oauth/authorize","https://example.com/oauth/token", ["steps.read","sleep.read","heart.write"]
    ]
  );
  res.json({ ok: true });
});
