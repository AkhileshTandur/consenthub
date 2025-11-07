import { Router } from "express";
import { z } from "zod";
import { pool } from "../db.js";
import { v4 as uuidv4 } from "uuid";

export const router = Router();

const ConsentSchema = z.object({
  user_id: z.string(),
  service_id: z.string(),
  scopes: z.array(z.string()),
  status: z.enum(["granted","revoked"])
});

router.get("/", async (_req, res) => {
  const { rows } = await pool.query("SELECT * FROM consents ORDER BY created_at DESC");
  res.json(rows);
});

router.post("/", async (req, res) => {
  const parse = ConsentSchema.safeParse(req.body);
  if (!parse.success) return res.status(400).json({ error: parse.error.flatten() });
  const c = parse.data;
  const id = uuidv4();
  await pool.query(
    "INSERT INTO consents (id, user_id, service_id, scopes, status) VALUES ($1,$2,$3,$4,$5)",
    [id, c.user_id, c.service_id, c.scopes, c.status]
  );
  res.status(201).json({ id, ...c });
});

router.post("/:id/revoke", async (req, res) => {
  const id = req.params.id;
  await pool.query("UPDATE consents SET status='revoked' WHERE id=$1", [id]);
  res.json({ ok: true });
});
