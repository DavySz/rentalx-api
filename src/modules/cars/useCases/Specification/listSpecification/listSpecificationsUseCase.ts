import { Specification } from "../../../models/Specification";
import { ISpecificationsRepository } from "../../../repositories/Specification/ISpecificationsRepository";

export class ListSpecificationsUseCase {
  constructor(private specificationRepository: ISpecificationsRepository) {}
  execute(): Specification[] {
    const specifications = this.specificationRepository.list();
    return specifications;
  }
}
