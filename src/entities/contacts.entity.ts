import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./users.entity";
import { Exclude } from "class-transformer";

@Entity("contacts")
export class Contact {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  fullname: string;

  @Column("text", { array: true })
  emails: string[];

  @Column("text", { array: true })
  phones: string[];

  @Exclude()
  @ManyToOne((type) => User, (user) => user.contacts, { onDelete: "CASCADE" })
  user: User;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
