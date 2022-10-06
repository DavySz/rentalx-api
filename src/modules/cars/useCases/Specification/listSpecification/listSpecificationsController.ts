import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListSpecificationsUseCase } from "./listSpecificationsUseCase";

export class ListSpecificationsController {
  async handle(_request: Request, response: Response): Promise<Response> {
    const listSpecificationsUseCase = container.resolve(
      ListSpecificationsUseCase
    );
    const specifications = await listSpecificationsUseCase.execute();
    return response.json(specifications);
  }
}
