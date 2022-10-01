import { SpecificationsRepository } from "../../../repositories/Specification/SpecificationsRepository";
import { ListSpecificationsController } from "./listSpecificationsController";
import { ListSpecificationsUseCase } from "./listSpecificationsUseCase";

const listSpecificationsController = new ListSpecificationsController(
  new ListSpecificationsUseCase(new SpecificationsRepository())
);

export { listSpecificationsController };
