import { Request, Response } from "express";
import { IUserLogin } from "../../interfaces/users";
import userLoginService from "../../services/login/userLogin.service";

const userLoginController = async (req: Request, res: Response) => {
  const { username, password }: IUserLogin = req.body;
  const token = await userLoginService({ username, password });

  return res.status(200).json(token);
};

export default userLoginController;
