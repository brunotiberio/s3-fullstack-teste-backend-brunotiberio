import { Express } from "express";

import loginRouter from "./login.routes";

const appRoutes = (app: Express) => {
  app.use("/login", loginRouter);
  //   app.use("/users");
  //   app.use("/contacts");
};

export default appRoutes;
