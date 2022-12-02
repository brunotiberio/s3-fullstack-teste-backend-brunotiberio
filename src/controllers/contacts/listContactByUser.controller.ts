import { Request, Response } from "express";
import listContactByUserService from "../../services/contacts/listContactByUser.service";

const listContactByUserController = async (req: Request, res: Response) => {
  const { userId } = req.params;

  const contactsList = await listContactByUserService(userId);
  return res.status(200).json(contactsList);
};
export default listContactByUserController;
