import express from "express";
import { port } from "./configs/index.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Deployed successfully" });
});

app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
