import express from "express";
import cors from "cors";
import { auth } from "./utils/auth.js";
import { toNodeHandler } from "better-auth/node";

export const app = express();

app.set("trust proxy", true);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);
app.all("/api/auth/{*any}", toNodeHandler(auth));
app.get("/", (req, res) => {
  res.send("Backend berjalan");
});
