import Express from "express";
import api from "./src/api";
import cors from "cors";

const app = Express();

const allowedOrigins = ["http://localhost:3000"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(options));
app.use(Express.json());

app.use("/api/v1", api);

export default app;
