import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/appError";
import { IContactRequest } from "../../interfaces/contacts";

const createContactService = async (
  userId: string,
  { fullname, emails, phones }: IContactRequest
) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new AppError(401, "Usuário não encontrado");
  }

  const contact = new Contact();
  contact.fullname = fullname;
  contact.emails = emails;
  contact.phones = phones;
  contact.user = user;

  const newContact = await contactRepository.save(contact);

  return newContact;
};

export default createContactService;
