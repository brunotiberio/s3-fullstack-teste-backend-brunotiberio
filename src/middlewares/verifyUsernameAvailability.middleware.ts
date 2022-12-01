import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appError";
import { User } from "../entities/users.entity";
import { AppDataSource } from "../data-source";

const verifyEmailAvailabilityMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username } = req.body;

  const usersRepository = AppDataSource.getRepository(User);
  const users = await usersRepository.find();

  const usernameAlreadyExists = users.find(
    (user) => user.username === username
  );

  if (usernameAlreadyExists) {
    throw new AppError(400, "Usuário já existe");
  }

  next();
};

export default verifyEmailAvailabilityMiddleware;
