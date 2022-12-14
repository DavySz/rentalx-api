import { parse } from "csv-parse";
import fs from "fs";
import { inject, injectable } from "tsyringe";

import { ICategoriesRepository } from "../../../repositories/Category/ICategoriesRepository";

interface IImportCategories {
  name: string;
  description: string;
}

@injectable()
export class ImportCategoryUseCase {
  constructor(
    @inject("CategoryRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  loadCategories(file: Express.Multer.File): Promise<IImportCategories[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategories[] = [];
      const parseFile = parse();
      stream.pipe(parseFile);
      parseFile
        .on("data", async (line) => {
          const [name, description] = line;
          categories.push({
            name,
            description,
          });
        })
        .on("end", () => {
          fs.promises.unlink(file.path);
          resolve(categories);
        })
        .on("error", (error) => {
          reject(error);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    await Promise.all(
      categories.map(async (category) => {
        const { name, description } = category;

        const existCategory = await this.categoriesRepository.findByName(name);

        if (!existCategory) {
          this.categoriesRepository.create({
            name,
            description,
          });
        }
      })
    );
  }
}
