import { Router } from "express";

import { ensureAuthenticated } from "../middlewere/ensureAuthenticated";
import { CreateUserController } from "../modules/accounts/useCases/User/createUser/CreateUserController";

const usersRoutes = Router();

const createUserController = new CreateUserController();

usersRoutes.use(ensureAuthenticated);

usersRoutes.post("/", createUserController.handle);

export { usersRoutes };
