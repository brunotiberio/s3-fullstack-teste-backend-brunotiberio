import { Request, Response } from "express";
import deleteContactByIdService from "../../services/contacts/deleteContactById.service";

const deleteContactByIdController = async (
  request: Request,
  response: Response
) => {
  const id = request.params.id;
  const deleteContact = await deleteContactByIdService(id);
  return response.status(204).json({ message: deleteContact });
};
export default deleteContactByIdController;
