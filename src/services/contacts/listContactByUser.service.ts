import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/appError";

const listContactByUserService = async (userId: string) => {
  const usersRepository = AppDataSource.getRepository(User);
  const user = await usersRepository.findOneBy({
    id: userId,
  });

  if (user?.id !== userId) {
    throw new AppError(404, "Usuário não encontrado");
  }

  return user.contacts;
};

export default listContactByUserService;
