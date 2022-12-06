import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import bcrypt from "bcrypt";
import { AppError } from "../../errors/appError";
import { IUserPatchRequest } from "../../interfaces/users";

const updateUserService = async (patchRequest: IUserPatchRequest) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({
    where: { id: patchRequest.id },
  });

  if (patchRequest.password) {
    if (bcrypt.compareSync(patchRequest.password, user!.password)) {
      throw new AppError(409, "Informe uma senha diferente");
    }
  }

  await userRepository.update(user!.id, {
    fullname:
      patchRequest.fullname !== undefined
        ? patchRequest.fullname
        : user!.fullname,
    username:
      patchRequest.username !== undefined
        ? patchRequest.username
        : user!.username,
    password:
      patchRequest.password !== undefined
        ? bcrypt.hashSync(patchRequest.password, 10)
        : user!.password,
    emails:
      patchRequest.emails !== undefined ? patchRequest.emails : user!.emails,
    phones:
      patchRequest.phones !== undefined ? patchRequest.phones : user!.phones,
    updatedAt: new Date(),
  });

  const updatedUser = await userRepository.findOneBy({ id: patchRequest.id });

  updatedUser?.contacts.sort((a,b) => {

    const nameA = a.fullname.toUpperCase(); 
    const nameB = b.fullname.toUpperCase(); 

    if(nameA < nameB){
      return -1
    }

    if(nameA > nameB){
      return 1
    }

    return 0
  })

  return updatedUser;
};

export default updateUserService;
