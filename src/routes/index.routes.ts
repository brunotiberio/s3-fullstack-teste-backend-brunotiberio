import { Express } from "express";

import loginRouter from "./login.routes";
import userRouter from "./users.routes";

const appRoutes = (app: Express) => {
  app.use("/login", loginRouter);
  app.use("/users", userRouter);
  //   app.use("/contacts");
};

export default appRoutes;
