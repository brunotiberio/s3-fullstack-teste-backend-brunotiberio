import { Router } from "express";
import yupValidateMiddleware from "../middlewares/yupValidate.middleware";
import { postLoginSchema } from "../schemas/postLogin.schema";

import userLoginController from "../controllers/login/userLogin.controller";

const loginRouter = Router();

loginRouter.post(
  "",
  yupValidateMiddleware(postLoginSchema),
  userLoginController
);

export default loginRouter;
