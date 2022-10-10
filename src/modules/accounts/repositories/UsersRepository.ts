import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";
import { IUsersRepositories } from "./IUsersRepository";

export class UsersRepository implements IUsersRepositories {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create(data: ICreateUserDTO): Promise<void> {
    const { driver_license, email, name, password } = data;
    const user = this.repository.create({
      driver_license,
      email,
      name,
      password,
    });
    await this.repository.save(user);
  }
}
