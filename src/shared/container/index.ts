import { container } from "tsyringe";

import { CategoriesRepository } from "../../modules/cars/repositories/Category/CategoriesRepository";
import { ICategoriesRepository } from "../../modules/cars/repositories/Category/ICategoriesRepository";
import { ISpecificationsRepository } from "../../modules/cars/repositories/Specification/ISpecificationsRepository";
import { SpecificationsRepository } from "../../modules/cars/repositories/Specification/SpecificationsRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoryRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
);
