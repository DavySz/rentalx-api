import { Router } from "express";
import multer from "multer";

import { ensureAuthenticated } from "../middlewere/ensureAuthenticated";
import { CreateCategoryController } from "../modules/cars/useCases/Category/createCategory/CreateCategoryController";
import { ImportCategoryController } from "../modules/cars/useCases/Category/importCategory/ImportCategoryController";
import { ListCategoriesController } from "../modules/cars/useCases/Category/listCategories/listCategoriesController";

const upload = multer({
  dest: "./tmp",
});

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();
const importCategoryController = new ImportCategoryController();

categoriesRoutes.use(ensureAuthenticated);

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/list", listCategoriesController.handle);

categoriesRoutes.post(
  "/import",
  upload.single("file"),
  importCategoryController.handle
);

export { categoriesRoutes };
