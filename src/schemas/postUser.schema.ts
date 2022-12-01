import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserRequest } from "../interfaces/users";

export const postUserSchema: SchemaOf<IUserRequest> = yup.object().shape({
  fullname: yup.string().required("'Nome completo é obrigatório'"),
  username: yup.string().required("'Username é obrigatório'"),
  password: yup.string().required("'Senha é obrigatória'"),
  emails: yup.array().of(yup.string().email().required("'Email é obrigatório'")).required("'Email é obrigatório'"),
  phones: yup.array().of(yup.string().required("'Telefone é obrigatório'")).required("'Telefone é obrigatório'"),
});
