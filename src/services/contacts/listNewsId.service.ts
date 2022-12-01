import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { AppError } from "../../errors/appError";

const listContactByIdService = async (id: string) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contacts = await contactRepository.find();
  const contactExists = contacts.find((contact) => contact.id === id);

  if (!contactExists) {
    throw new AppError(404, "Contato não encontrado");
  }

  return contactExists;
};

export default listContactByIdService;
