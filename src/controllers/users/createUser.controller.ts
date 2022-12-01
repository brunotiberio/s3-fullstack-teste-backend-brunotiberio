import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import createUserService from "../../services/users/createUser.service";

const createUserController = async (req: Request, res: Response) => {
  const { fullname, username, password, emails, phones } = req.body;
  const user = await createUserService({
    fullname,
    username,
    password,
    emails,
    phones,
  });

  return res.status(201).json(instanceToPlain(user));
};

export default createUserController;
