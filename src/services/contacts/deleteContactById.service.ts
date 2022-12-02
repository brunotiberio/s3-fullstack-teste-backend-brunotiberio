import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { AppError } from "../../errors/appError";

const deleteContactByIdService = async (id: string) => {
  const ContactRepository = AppDataSource.getRepository(Contact);
  const ContactDeleted = await ContactRepository.findOneBy({ id: id });

  if (!ContactDeleted) {
    throw new AppError(404, "Usuário não encontrado");
  }

  if (ContactDeleted.id !== id) {
    throw new AppError(401, "Usuário não autorizado");
  }

  await ContactRepository.delete(ContactDeleted!.id);

  return "Usuário deletado";
};

export default deleteContactByIdService;
