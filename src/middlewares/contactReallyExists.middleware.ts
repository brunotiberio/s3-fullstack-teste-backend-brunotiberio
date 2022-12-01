import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors/appError";
import { Contact } from "../entities/contacts.entity";

const contactReallyExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactId = req.params.id;

  const contactsRepository = AppDataSource.getRepository(Contact);
  const targetContact = await contactsRepository.findOneBy({
    id: contactId,
  });

  if (!targetContact) {
    throw new AppError(404, "Contato não encontrado");
  }

  next();
};

export default contactReallyExistsMiddleware;
