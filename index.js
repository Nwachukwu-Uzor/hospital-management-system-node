import express from "express";
import * as dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Deployed successfully" });
});

app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
