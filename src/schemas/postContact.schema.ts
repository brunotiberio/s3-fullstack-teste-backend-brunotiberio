import * as yup from "yup";
import { SchemaOf } from "yup";
import { IContactRequest } from "../interfaces/contacts";

export const postContactSchema: SchemaOf<IContactRequest> = yup.object().shape({
  fullname: yup.string().required("'Nome completo é obrigatório'"),
  emails: yup.array().required("'Email é obrigatório'"),
  phones: yup.array().required("'Telefone é obrigatório'"),
});

export default postContactSchema
