import { Router } from "express"
import { SettingsController } from "./controllers/SettingsController";

const routes = Router();
const settingsController = new SettingsController();

routes.post("/settings", settingsController.create)
routes.post("/users", settingsController.create)

export { routes }