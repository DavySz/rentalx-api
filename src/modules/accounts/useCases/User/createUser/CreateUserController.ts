import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { driver_license, email, name, password } = request.body;
    const createUSerUseCase = container.resolve(CreateUserUseCase);
    await createUSerUseCase.execute({
      driver_license,
      email,
      name,
      password,
    });

    return response.status(201).send();
  }
}
