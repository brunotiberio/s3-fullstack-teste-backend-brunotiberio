import express, { Request, Response } from "express";
import appRoutes from "./routes/index.routes";
import { errorMiddleware } from "./middlewares/error.middleware";

const app = express();
app.use(express.json());
appRoutes(app);

app.use("/", (req: Request, res: Response) => {
  return res.send(
    'Para acessar a documentação da api, click <a href="https://github.com/Folha-do-Saber/api-folha-do-saber/blob/developer/README.md" target="_blank">HERE</a>"'
  );
});

app.use(errorMiddleware)

export default app;
