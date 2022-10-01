import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/Specification/createSpecification";
import { listSpecificationsController } from "../modules/cars/useCases/Specification/listSpecification";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
  createSpecificationController.handle(request, response);
});

specificationsRoutes.get("/list", (request, response) => {
  listSpecificationsController.handle(request, response);
});

export { specificationsRoutes };
