import express, { NextFunction, Request, Response } from "express";
const app = express();

app.use(express.text());
app.use(express.json());

const router = express.Router();

app.use("/", router);

router.get("/api/v1/users/create-user", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);
  res.json({
    success: true,
    message: "User Created Succesfully",
    data: user,
  });
});

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);

  next();
};

app.get("/", logger, (req: Request, res: Response) => {
  console.log(req.query.email);
  res.send("Hello World Rakib Hasan and Jhora!");
});

app.post("/", logger, (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    message: "Receive Data",
  });
});

export default app;
