import { Router } from "express";
import AdminCreateController from "../controllers/AdminsController/AdminCreateController.js";
import AdminCreateValidator from "../middlewares/Validators/AdminsValidatos/AdminCreateValidator.js";
import AdminGetAllController from "../controllers/AdminsController/AdminGetAllController.js";
import ValidatorID from "../middlewares/Validators/ValidatorID.js";
import AdminGetOneController from "../controllers/AdminsController/AdminGetOneController.js";
import AdminUpdateValidator from "../middlewares/Validators/AdminsValidatos/AdminUpdateValidator.js";
import AdminUpdateController from "../controllers/AdminsController/AdminUpdateController.js";
import AdminDeleteController from "../controllers/AdminsController/AdminDeleteController.js";
import TokenAuthenticator from "../middlewares/Validators/TokenAuthenticator.js";
const router = Router();

// Criar o admin
// Rota protegida para apenas admin_master criar outros admins
router.post(
  "/",
  TokenAuthenticator,
  AdminCreateValidator,
  AdminCreateController
);

// Buscar todos os admins
// Rota protegida apenas para admin_master
router.get("/", TokenAuthenticator, AdminGetAllController);

// Listar admin por id
// Rota protegida apenas para o admin_master ou para o propio admin que busca seu usuario
router.get("/:id", TokenAuthenticator, ValidatorID, AdminGetOneController);

// Atualizar admin por id
// Rota protegida apenas para o admin_master ou para o propio admin que busca seu usuario
router.put(
  "/:id",
  TokenAuthenticator,
  ValidatorID,
  AdminUpdateValidator,
  AdminUpdateController
);

// Deletar admin por id
// Rota protegida apenas para o admin_master ou para o propio admin que busca seu usuario
router.delete("/:id", TokenAuthenticator, ValidatorID, AdminDeleteController);

export default router;
