import { Router } from "express";
import RaffleCreateValidator from "../middlewares/Validators/RaffleValidatos/RaffleCreateValidator.js";
import RaffleCreateController from "../controllers/RaffleController/RaffleCreateController.js";
import TokenAuthenticator from "../middlewares/Validators/TokenAuthenticator.js";
import RaffleGetAllController from "../controllers/RaffleController/RaffleGetAllController.js";
import ValidatorID from "../middlewares/Validators/ValidatorID.js";
import RaffleGetOneController from "../controllers/RaffleController/RaffleGetOneController.js";
import RaffleUpdateController from "../controllers/RaffleController/RaffleUpdateController.js";
import RaffleUpdateValidator from "../middlewares/Validators/RaffleValidatos/RaffleUpdateValidator.js";
import RaffleDeleteController from "../controllers/RaffleController/RaffleDeleteController.js";

const router = Router();

router.post(
  "/",
  TokenAuthenticator,
  RaffleCreateValidator,
  RaffleCreateController
);

router.get("/", TokenAuthenticator, RaffleGetAllController);

router.get("/:id", TokenAuthenticator, ValidatorID, RaffleGetOneController);

router.put(
  "/:id",
  TokenAuthenticator,
  ValidatorID,
  RaffleUpdateValidator,
  RaffleUpdateController
);

router.delete("/:id", TokenAuthenticator, ValidatorID, RaffleDeleteController);

export default router;
