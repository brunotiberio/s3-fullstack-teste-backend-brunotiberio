import { Router } from "express";
import { postLoginSchema } from "../schemas/postLogin.schema";

import yupValidateMiddleware from "../middlewares/yupValidate.middleware";

import userLoginController from "../controllers/login/userLogin.controller";

const loginRouter = Router();

loginRouter.post(
  "",
  yupValidateMiddleware(postLoginSchema),
  userLoginController
);

export default loginRouter;
