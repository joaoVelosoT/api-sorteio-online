import { Router } from "express";
import AdminCreateController from "../controllers/AdminsController/AdminCreateController.js";
import AdminCreateValidator from "../middlewares/Validators/AdminsValidatos/AdminCreateValidator.js";
import AdminGetAllController from "../controllers/AdminsController/AdminGetAllController.js";
import ValidatorID from "../middlewares/Validators/ValidatorID.js";
import AdminGetOneController from "../controllers/AdminsController/AdminGetOneController.js";
import AdminUpdateValidator from "../middlewares/Validators/AdminsValidatos/AdminUpdateValidator.js";
import AdminUpdateController from "../controllers/AdminsController/AdminUpdateController.js";
import AdminDeleteController from "../controllers/AdminsController/AdminDeleteController.js";
const router = Router();

// Criar o admin
router.post("/", AdminCreateValidator, AdminCreateController);

// Buscar todos os admins
router.get("/", AdminGetAllController);

// Listar admin por id
router.get("/:id", ValidatorID, AdminGetOneController);

// Atualizar admin por id
router.put("/:id", ValidatorID, AdminUpdateValidator, AdminUpdateController);

// Deletar admin por id
router.delete("/:id", ValidatorID, AdminDeleteController);

export default router;
