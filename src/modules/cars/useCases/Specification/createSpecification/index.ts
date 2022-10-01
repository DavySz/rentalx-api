import { SpecificationsRepository } from "../../../repositories/Specification/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const createSpecificationController = new CreateSpecificationController(
  new CreateSpecificationUseCase(new SpecificationsRepository())
);

export { createSpecificationController };
