import { Router } from "express";
import RaffleCreateValidator from "../middlewares/Validators/RaffleValidatos/RaffleCreateValidator.js";
import RaffleCreateController from "../controllers/RaffleController/RaffleCreateController.js";
import TokenAuthenticator from "../middlewares/Validators/TokenAuthenticator.js";
import RaffleGetAllController from "../controllers/RaffleController/RaffleGetAllController.js";
import ValidatorID from "../middlewares/Validators/ValidatorID.js";
import RaffleGetOneController from "../controllers/RaffleController/RaffleGetOneController.js";
const router = Router();

router.post(
  "/",
  TokenAuthenticator,
  RaffleCreateValidator,
  RaffleCreateController
);

router.get("/", TokenAuthenticator, RaffleGetAllController);

router.get("/:id", TokenAuthenticator, ValidatorID, RaffleGetOneController);

export default router;
