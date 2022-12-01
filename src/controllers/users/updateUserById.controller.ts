import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { IUserPatchRequest } from "../../interfaces/users";
import updateUserService from "../../services/users/updateUser.service";

const updateUserByIdController = async (req: Request, res: Response) => {
  const { fullname, username, password, emails, phones }: IUserPatchRequest =
    req.body;
  const id = req.params.id;

  const updateUser = await updateUserService({
    id,
    fullname,
    username,
    password,
    emails,
    phones,
  });

  return res.status(200).json(instanceToPlain(updateUser));
};

export default updateUserByIdController;
