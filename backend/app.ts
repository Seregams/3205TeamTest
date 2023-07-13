import express, { Express } from "express";
import { PORT } from "./config";
import submitForm from "./routes/submitForm";
const app: Express = express();

app.use(express.json());
app.use("/api/check-form", submitForm);

async function start() {
  try {
    app.listen(PORT, () => console.log(`App started on port:${PORT}`));
  } catch (e) {
    console.log("Server error", (e as Error).message);
    process.exit(1);
  }
}

start();
