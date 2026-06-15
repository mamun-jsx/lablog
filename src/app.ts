import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Lablog API is running.... 🚀  !");
});

app.use("/api/v1",routes);

export default app;