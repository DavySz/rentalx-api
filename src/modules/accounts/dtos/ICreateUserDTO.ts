export interface ICreateUserDTO {
  email: string;
  name: string;
  driver_license: string;
  password: string;
  id?: string;
  avatar?: string;
}
