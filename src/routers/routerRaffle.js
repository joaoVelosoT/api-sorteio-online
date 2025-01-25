import { Router } from "express";
import RaffleCreateValidator from "../middlewares/Validators/RaffleValidatos/RaffleCreateValidator.js";
import RaffleCreateController from "../controllers/RaffleController/RaffleCreateController.js";
import TokenAuthenticator from "../middlewares/Validators/TokenAuthenticator.js";
import RaffleGetAllController from "../controllers/RaffleController/RaffleGetAllController.js";
const router = Router();

router.post(
  "/",
  TokenAuthenticator,
  RaffleCreateValidator,
  RaffleCreateController
);

router.get("/", TokenAuthenticator, RaffleGetAllController);

export default router;
