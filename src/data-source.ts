import { DataSource } from "typeorm";
import { Contact } from "./entities/contacts.entity";
import { User } from "./entities/users.entity";

require("dotenv").config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,

  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PWD,
  database: process.env.POSTGRES_DB,

  synchronize: false,
  logging: true,
  entities: [User, Contact],
  migrations: ["src/migrations/*.ts"],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Banco de dados inicializado");
  })
  .catch((err) => {
    console.error("Erro durante a inicialização do Data Source", err);
  });
