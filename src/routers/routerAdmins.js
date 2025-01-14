import { Router } from "express";
import AdminCreateController from "../controllers/AdminsController/AdminCreateController.js";
import AdminCreateValidator from "../middlewares/Validators/AdminsValidatos/AdminCreateValidator.js";
import AdminGetAllController from "../controllers/AdminsController/AdminGetAllController.js";
const router = Router();

// Criar o admin
router.post("/", AdminCreateValidator, AdminCreateController);

// Buscar todos os admins
router.get("/", AdminGetAllController);

export default router;
