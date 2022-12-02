import { Router } from "express";
import postContactSchema from "../schemas/postContact.schema";

import authTokenMiddleware from "../middlewares/authToken.middleware";
import yupValidateMiddleware from "../middlewares/yupValidate.middleware";

import createContactController from "../controllers/contacts/createContact.controller";
import deleteContactByIdController from "../controllers/contacts/deleteContactById.controller";
import listContactByUserController from "../controllers/contacts/listContactByUser.controller";
import listContactByIdController from "../controllers/contacts/listContactById.controller";
import updateContactByIdController from "../controllers/contacts/updateContactById.controller";

const contactRouter = Router();

contactRouter.post(
  "",
  yupValidateMiddleware(postContactSchema),
  authTokenMiddleware,
  createContactController
);

contactRouter.get("/:id", authTokenMiddleware, listContactByIdController);

contactRouter.get(
  "/user/:userId",
  authTokenMiddleware,
  listContactByUserController
);

contactRouter.patch("/:id", authTokenMiddleware, updateContactByIdController);

contactRouter.delete("/:id", authTokenMiddleware, deleteContactByIdController);

export default contactRouter;
