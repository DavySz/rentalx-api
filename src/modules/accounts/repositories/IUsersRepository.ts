import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

export interface IUsersRepositories {
  create(data: ICreateUserDTO): Promise<void>;
}
