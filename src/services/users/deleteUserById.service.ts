import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/appError";

const deleteUserByIdService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const userDeleted = await userRepository.findOneBy({ id: id });

  if (!userDeleted) {
    throw new AppError(404, "Usuário não encontrado");
  }

  if (userDeleted.id !== id) {
    throw new AppError(401, "Usuário não autorizado");
  }

  await userRepository.delete(userDeleted!.id);

  return "Usuário deletado";
};

export default deleteUserByIdService;
