import { Request, Response } from "express";
import listContactByIdService from "../../services/contacts/listContactById.service";

const listContactByIdController = async (req: Request, res: Response) => {
  const id = req.params.id;

  const news = await listContactByIdService(id);

  return res.status(200).json(news);
};
export default listContactByIdController;
