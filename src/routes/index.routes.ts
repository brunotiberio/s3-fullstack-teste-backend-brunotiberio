import { Express } from "express";

import loginRouter from "./login.routes";
import userRouter from "./users.routes";
import contactRouter from "./contacts.routes";

const appRoutes = (app: Express) => {
  app.use("/login", loginRouter);
  app.use("/users", userRouter);
  app.use("/contacts", contactRouter);
};

export default appRoutes;
