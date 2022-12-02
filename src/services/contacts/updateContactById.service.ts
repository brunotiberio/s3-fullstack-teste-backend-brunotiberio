import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { AppError } from "../../errors/appError";
import { IContactPatchRequest } from "../../interfaces/contacts";

const updateContactByIdService = async (patchRequest: IContactPatchRequest) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contact = await contactRepository.findOne({
    where: { id: patchRequest.id },
  });

  if (!contact) {
    throw new AppError(404, "Usuário não encontrado");
  }

  await contactRepository.update(contact!.id, {
    fullname:
      patchRequest.fullname !== undefined
        ? patchRequest.fullname
        : contact!.fullname,
    emails:
      patchRequest.emails !== undefined ? patchRequest.emails : contact!.emails,
    phones:
      patchRequest.phones !== undefined ? patchRequest.phones : contact!.phones,
  });

  const updatedContact = await contactRepository.findOneBy({
    id: patchRequest.id,
  });

  return updatedContact;
};

export default updateContactByIdService;
