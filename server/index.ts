import express, { type Request, type Response } from "express";

const app = express();
const port = 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running...");
});

app.listen(port, () => {
  console.log(`Listening on  http:localhost:${port}`);
});
