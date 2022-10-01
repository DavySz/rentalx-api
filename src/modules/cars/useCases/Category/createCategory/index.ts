import { CategoriesRepository } from "../../../repositories/Category/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const createCategoryController = new CreateCategoryController(
  new CreateCategoryUseCase(CategoriesRepository.getInstance())
);

export { createCategoryController };
