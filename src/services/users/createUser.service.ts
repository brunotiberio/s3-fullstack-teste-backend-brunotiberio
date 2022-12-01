import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import { IUserRequest } from "../../interfaces/users";
import { hash } from "bcrypt";

const createUserService = async ({
  fullname,
  username,
  password,
  emails,
  phones,
}: IUserRequest) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const hashedPassword = await hash(password, 10);

  const newUser = new User();
  newUser.fullname = fullname;
  newUser.username = username;
  newUser.password = hashedPassword;
  newUser.emails = emails;
  newUser.phones = phones;

  userRepository.save(newUser);

  return newUser;
};

export default createUserService;
