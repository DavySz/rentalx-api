import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { UsersRepository } from "../../../repositories/UsersRepository";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: UsersRepository
  ) {}

  async execute(data: ICreateUserDTO): Promise<void> {
    const { driver_license, email, name, password } = data;
    await this.usersRepository.create({
      driver_license,
      email,
      name,
      password,
    });
  }
}
