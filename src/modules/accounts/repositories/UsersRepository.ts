import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";
import { IUsersRepositories } from "./IUsersRepository";

export class UsersRepository implements IUsersRepositories {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });
    return user;
  }

  async create(data: ICreateUserDTO): Promise<void> {
    const { driver_license, email, name, password, avatar, id } = data;
    const user = this.repository.create({
      driver_license,
      email,
      name,
      password,
      avatar,
      id,
    });
    await this.repository.save(user);
  }
}
