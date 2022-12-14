import express, { Request, Response } from "express";
import "express-async-errors";
import appRoutes from "./routes/index.routes";
import { errorMiddleware } from "./middlewares/error.middleware";
import "dotenv/config";

var cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors())
appRoutes(app);



app.use("/", (req: Request, res: Response) => {
  return res.send(
    'Para acessar a documentação da api, click <a href="https://github.com/Folha-do-Saber/api-folha-do-saber/blob/developer/README.md" target="_blank">HERE</a>"'
  );
});

const PORT = process.env.PORT || 4000;

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log("Servidor executando na porta " + PORT);
});

export default app;
