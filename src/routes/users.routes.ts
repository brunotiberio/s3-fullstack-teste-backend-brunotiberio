import { Router } from "express";
import { postUserSchema } from "../schemas/postUser.schema";

import yupValidateMiddleware from "../middlewares/yupValidate.middleware";
import verifyUsernameAvailabilityMiddleware from "../middlewares/verifyUsernameAvailability.middleware";
import authTokenMiddleware from "../middlewares/authToken.middleware";
import userIsHimselfMiddleware from "../middlewares/userIsHimself.middleware";

import createUserController from "../controllers/users/createUser.controller";
import listUserByIdController from "../controllers/users/listUserById.controller";
import updateUserController from "../controllers/users/updateUserById.controller";
import deleteUserByIdController from "../controllers/users/deleteUserById.controller";

const userRouter = Router();

userRouter.post(
  "",
  yupValidateMiddleware(postUserSchema),
  verifyUsernameAvailabilityMiddleware,
  createUserController
);

userRouter.get(
  "/:id",
  authTokenMiddleware,
  userIsHimselfMiddleware,
  listUserByIdController
);

userRouter.patch(
  "/:id",
  authTokenMiddleware,
  userIsHimselfMiddleware,
  updateUserController
);

userRouter.delete(
  "/:id",
  authTokenMiddleware,
  userIsHimselfMiddleware,
  deleteUserByIdController
);

export default userRouter;
