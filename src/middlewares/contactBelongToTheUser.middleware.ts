import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities/contacts.entity";
import { User } from "../entities/users.entity";
import { AppError } from "../errors/appError";

const contactsBelongsToTheUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.user.userId;
  const contactId = req.params.id;

  const usersRepository = AppDataSource.getRepository(User);
  const targetUser = await usersRepository.findOne({
    where: { id: userId },
  });

  const contactsRepository = AppDataSource.getRepository(Contact);
  const targetContact = await contactsRepository.findOne({
    where: { id: contactId },
  });

  if (targetContact?.user.id !== targetUser?.id) {
    throw new AppError(401, "Usuário não autorizado");
  }

  next();
};

export default contactsBelongsToTheUserMiddleware
