import { Request, Response } from "express";
import { IContactPatchRequest } from "../../interfaces/contacts";
import updateContactByIdService from "../../services/contacts/updateContactById.service";

const updateContactByIdController = async (req: Request, res: Response) => {
  const { fullname, emails, phones }: IContactPatchRequest = req.body;
  const { id } = req.params;

  const updateContact = await updateContactByIdService({
    id,
    fullname,
    emails,
    phones,
  });

  return res.status(200).json(updateContact);
};
export default updateContactByIdController;
