import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Exclude } from "class-transformer";
import { Contact } from "./contacts.entity";

@Entity("users")
export class User {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  fullname: string;

  @Column()
  username: string;

  @Column()
  @Exclude()
  password: string;

  @Column("text", { array: true })
  emails: string[];

  @Column("text", { array: true })
  phones: string[];

  @Column()
  createdAt: Date = new Date();

  @Column()
  updatedAt: Date = new Date();

  @OneToMany((type) => Contact, (contact) => contact.user, {
    eager: true,
  })
  contacts: Contact[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
