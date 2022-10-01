import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./listCategoriesUseCase";

export class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}
  handle(_request: Request, response: Response): Response {
    const categories = this.listCategoriesUseCase.execute();
    return response.json(categories);
  }
}
