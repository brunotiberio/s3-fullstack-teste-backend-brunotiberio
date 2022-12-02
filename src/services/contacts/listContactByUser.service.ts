import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/appError";

const listContactByUserService = async (userId: string) => {
  const usersRepository = AppDataSource.getRepository(User);
  const users = await usersRepository.find()
  const userExists = users.find(user => user.id === userId)
  console.log(userExists)

  if (!userExists) {
    throw new AppError(404, "Usuário não encontrado");
  }

  return userExists.contacts
};

export default listContactByUserService;
