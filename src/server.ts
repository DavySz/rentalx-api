import express from "express";
import swaggerUI from "swagger-ui-express";

import { routes } from "./routes";
import swaggerSetup from "./swagger.json";

const app = express();
app.use(express.json());
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSetup));
app.use(routes);
app.listen(3333);
