import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import { IContactRequest } from "../../interfaces/contacts";
import createContactService from "../../services/contacts/createContact.service";

const createContactController = async (req: Request, res: Response) => {
  const { fullname, emails, phones }: IContactRequest = req.body;
  const userId = req.user.userId;

  const newContact = await createContactService(userId, {
    fullname,
    emails,
    phones,
  });

  return res.status(201).json(instanceToPlain(newContact));
};

export default createContactController;
