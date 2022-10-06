import express from "express";
import swaggerUI from "swagger-ui-express";
import "reflect-metadata";

import { routes } from "./routes";
import swaggerSetup from "./swagger.json";
import "./database";

import "./shared/container";

const app = express();

app.use(express.json());

app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSetup));

app.use(routes);

app.listen(3333);
