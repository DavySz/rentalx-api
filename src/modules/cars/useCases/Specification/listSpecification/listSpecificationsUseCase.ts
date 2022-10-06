import { inject, injectable } from "tsyringe";

import { Specification } from "../../../entities/Specification";
import { ISpecificationsRepository } from "../../../repositories/Specification/ISpecificationsRepository";

@injectable()
export class ListSpecificationsUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationRepository: ISpecificationsRepository
  ) {}
  async execute(): Promise<Specification[]> {
    const specifications = await this.specificationRepository.list();
    return specifications;
  }
}
