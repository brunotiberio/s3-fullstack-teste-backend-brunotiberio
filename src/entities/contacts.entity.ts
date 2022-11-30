import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./users.entity";

@Entity("contacts")
export class Contact {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  fullname: string;

  @Column('text', {array: true})
  emails: string[];

  @Column('text', {array: true})
  phones: string[];

  @ManyToOne((type) => User, (user) => user.contacts)
  user: User;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
