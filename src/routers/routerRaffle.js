import { Router } from "express";
import RaffleCreateValidator from "../middlewares/Validators/RaffleValidatos/RaffleCreateValidator.js";
import RaffleCreateController from "../controllers/RaffleController/RaffleCreateController.js";
import TokenAuthenticator from "../middlewares/Validators/TokenAuthenticator.js";
const router = Router();

router.post(
  "/",
  TokenAuthenticator,
  RaffleCreateValidator,
  RaffleCreateController
);

export default router;
