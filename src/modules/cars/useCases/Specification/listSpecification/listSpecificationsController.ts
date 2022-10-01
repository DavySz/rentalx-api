import { Request, Response } from "express";

import { ListSpecificationsUseCase } from "./listSpecificationsUseCase";

export class ListSpecificationsController {
  constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) {}
  handle(_request: Request, response: Response): Response {
    const specifications = this.listSpecificationsUseCase.execute();
    return response.json(specifications);
  }
}
