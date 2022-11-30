import express from "express";
import connection from "./configs/connection.js";
import { port } from "./configs/index.js";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Deployed successfully" });
});

app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
