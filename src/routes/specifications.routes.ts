import { Router } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories/Specification/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/Specification/CreateSpecificationService";

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createSpecificationService = new CreateSpecificationService(
    specificationsRepository
  );
  createSpecificationService.execute({ name, description });

  return response.status(201).send();
});

specificationsRoutes.get("/list", (_request, response) => {
  const specifications = specificationsRepository.list();
  return response.json(specifications);
});

export { specificationsRoutes };
