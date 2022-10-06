import { Router } from "express";

import { CreateSpecificationController } from "../modules/cars/useCases/Specification/createSpecification/CreateSpecificationController";
import { ListSpecificationsController } from "../modules/cars/useCases/Specification/listSpecification/listSpecificationsController";

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationsController = new ListSpecificationsController();

specificationsRoutes.post("/", createSpecificationController.handle);
specificationsRoutes.get("/list", listSpecificationsController.handle);

export { specificationsRoutes };
