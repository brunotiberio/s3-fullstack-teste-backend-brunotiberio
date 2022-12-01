import { Request, Response } from "express";
import deleteUserByIdService from "../../services/users/deleteUserById.service";

const deleteUserByIdController = async (req: Request, res: Response) => {
  const id = req.params.id;

  const userDeleted = await deleteUserByIdService(id);

  return res.status(204).json({ message: userDeleted });
};

export default deleteUserByIdController;
