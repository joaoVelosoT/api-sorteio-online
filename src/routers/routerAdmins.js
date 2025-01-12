import { Router } from "express";
import AdminCreateController from "../controllers/AdminsController/AdminCreateController.js";
import AdminCreateValidator from "../middlewares/Validators/AdminsValidatos/AdminCreateValidator.js";
const router = Router();

router.post("/", AdminCreateValidator, AdminCreateController);

export default router;
