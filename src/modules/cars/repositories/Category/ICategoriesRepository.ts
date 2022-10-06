import { Category } from "../../entities/Category";

export interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export interface ICategoriesRepository {
  create({ description, name }: ICreateCategoryDTO): Promise<void>;
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
}
