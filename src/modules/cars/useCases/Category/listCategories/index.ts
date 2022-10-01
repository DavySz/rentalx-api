import { CategoriesRepository } from "../../../repositories/Category/CategoriesRepository";
import { ListCategoriesController } from "./listCategoriesController";
import { ListCategoriesUseCase } from "./listCategoriesUseCase";

const listCategoriesController = new ListCategoriesController(
  new ListCategoriesUseCase(CategoriesRepository.getInstance())
);

export { listCategoriesController };
