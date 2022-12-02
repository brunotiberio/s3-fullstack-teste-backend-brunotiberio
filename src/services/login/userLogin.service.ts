import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { User } from "../../entities/users.entity";
import { IUserLogin } from "../../interfaces/users";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

const userLoginService = async ({ username, password }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const userLogin = users.find((user) => user.username === username);

  if (!userLogin) {
    throw new AppError(403, "Username ou senha inválidos");
  }

  const comparePassword = bcrypt.compareSync(password, userLogin.password);

  if (!comparePassword) {
    throw new AppError(403, "Username ou senha inválidos");
  }

  const token = jwt.sign(
    {
      userId: userLogin.id,
    },
    process.env.SECRET_KEY as string,
    { expiresIn: "1h" }
  );

  return { id: userLogin.id, token };
};

export default userLoginService;
