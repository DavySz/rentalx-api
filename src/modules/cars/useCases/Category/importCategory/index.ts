import { CategoriesRepository } from "../../../repositories/Category/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const importCategoryController = new ImportCategoryController(
  new ImportCategoryUseCase(CategoriesRepository.getInstance())
);

export { importCategoryController };
