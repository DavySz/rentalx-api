import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/upload";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import { CreateCategoryController } from "../modules/cars/useCases/Category/createCategory/CreateCategoryController";
import { ImportCategoryController } from "../modules/cars/useCases/Category/importCategory/ImportCategoryController";
import { ListCategoriesController } from "../modules/cars/useCases/Category/listCategories/listCategoriesController";

const uploadCategory = multer(uploadConfig.upload("./tmp"));

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();
const importCategoryController = new ImportCategoryController();

categoriesRoutes.use(ensureAuthenticated);

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/list", listCategoriesController.handle);

categoriesRoutes.post(
  "/import",
  uploadCategory.single("category"),
  importCategoryController.handle
);

export { categoriesRoutes };
