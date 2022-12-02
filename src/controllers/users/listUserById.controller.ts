import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import listUserByIdService from "../../services/users/listUserById.service";


const listUserByIdController = async (req: Request, res: Response) => {
  const id = req.params.id;

  const user = await listUserByIdService(id);

  return res.status(200).json(instanceToPlain(user));
};

export default listUserByIdController;
