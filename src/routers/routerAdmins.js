import { Router } from "express";
import AdminCreateController from "../controllers/AdminsController/AdminCreateController.js";
import AdminCreateValidator from "../middlewares/Validators/AdminsValidatos/AdminCreateValidator.js";
import AdminGetAllController from "../controllers/AdminsController/AdminGetAllController.js";
import ValidatorID from "../middlewares/Validators/ValidatorID.js";
import AdminGetOneController from "../controllers/AdminsController/AdminGetOneController.js";
const router = Router();

// Criar o admin
router.post("/", AdminCreateValidator, AdminCreateController);

// Buscar todos os admins
router.get("/", AdminGetAllController);

// Listar admin por id
router.get("/:id", ValidatorID, AdminGetOneController);

export default router;
