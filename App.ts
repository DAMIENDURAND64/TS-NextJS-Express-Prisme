import Express from "express";

const app = Express();

app.use(Express.json());

app.get("/", (req: any, res: any) => {
  return res.status(200).json("Hello World");
});

export default app;
