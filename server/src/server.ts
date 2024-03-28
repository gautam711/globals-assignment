import express, { Express } from "express";
import cors from "cors";
import routes from "./routes/routes";

const app: Express = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

// Routes
app.use("/api/v1", routes);

export { app };
