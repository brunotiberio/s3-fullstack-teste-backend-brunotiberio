import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserLogin } from "../interfaces/users";

export const postLoginSchema: SchemaOf<IUserLogin> = yup.object().shape({
  username: yup.string().required("'Username é obrigatório'"),
  password: yup.string().required("'Senha é obrigatória'"),
});
