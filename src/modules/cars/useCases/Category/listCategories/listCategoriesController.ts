import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCategoriesUseCase } from "./listCategoriesUseCase";

export class ListCategoriesController {
  async handle(_request: Request, response: Response): Promise<Response> {
    const listCategoriesUseCase = container.resolve(ListCategoriesUseCase);
    const categories = await listCategoriesUseCase.execute();
    return response.json(categories);
  }
}
