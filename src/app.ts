import express, {Express} from "express";
import cors from "cors";
import { loadEnv } from "./config/envs";
import { downloadRouter } from "./routers";

loadEnv();

const app = express();
app
  .use(cors())
  .use(express.json())
  .get("/health", (_req, res) => res.send("OK!"))
  .use("/downloads", downloadRouter)

export function init(): Promise<Express> {
return Promise.resolve(app);
}

export default app;