import express from "express";
import cors from "cors";
import morgan from "morgan";
import { router as consentRouter } from "./routes/consents.ts";
import { router as serviceRouter } from "./routes/services.ts";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/consents", consentRouter);
app.use("/api/services", serviceRouter);

const port = process.env.PORT || 4000;
app.get("/api/health", (_req, res) => res.json({ ok: true }));
app.listen(port, () => {
  console.log(`ConsentHub backend running on http://localhost:${port}`);
});
