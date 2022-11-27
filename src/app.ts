import express, { Application, Request, Response } from "express";
import * as dotenv from "dotenv";
dotenv.config();

const app: Application = express();
const port: number = Number(process.env.PORT);
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "success",
    data: "You can now go ahead with your development",
  });
});

app.listen(port, () => {
  console.info(`Ready on port ${port}`);
});
