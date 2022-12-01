import { Router } from "express";
import yupValidateMiddleware from "../middlewares/yupValidate.middleware";
import { postUserSchema } from "../schemas/postUser.schema";
import verifyUsernameAvailabilityMiddleware from "../middlewares/verifyUsernameAvailability.middleware";
import createUserController from "../controllers/users/createUser.controller";
import authTokenMiddleware from "../middlewares/authToken.middleware";
import userIsHimselfMiddleware from "../middlewares/userIsHimself.middleware";
import listUserByIdController from "../controllers/users/listUserById.controller";
import updateUserController from "../controllers/users/updateUserById.controller";
import deleteUserByIdController from "../controllers/users/deleteUserById.controller";
import updateUserByIdController from "../controllers/users/updateUserById.controller";

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
