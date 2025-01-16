// const { Router } = require("express");
import { Router } from "express";

import ValidatorID from "../middlewares/Validators/ValidatorID.js";
import UserCreateController from "../controllers/UsersController/UserCreateController.js";
import UserGetAllController from "../controllers/UsersController/UserGetAllController.js";
import UserGetOneController from "../controllers/UsersController/UserGetOneController.js";

import UserUpdateController from "../controllers/UsersController/UserUpdateController.js";
import UserDeleteController from "../controllers/UsersController/UserDeleteController.js";
import UserCreateValidator from "../middlewares/Validators/UsersValidatos/UserCreateValidator.js";
import UserUpdateValidator from "../middlewares/Validators/UsersValidatos/UserUpdateValidator.js";
import TokenAuthenticator from "../middlewares/Validators/TokenAuthenticator.js";

const router = Router();

// Cadastrar usuarios
router.post("/", UserCreateValidator, UserCreateController);

// Listar usuarios // Rota protegida apenas para admins
router.get("/", TokenAuthenticator, UserGetAllController);

// Listar usuario por id / Rota protegida
// apenas para admins e para o usuario logado buscar seus propios dados
router.get("/:id", TokenAuthenticator, ValidatorID, UserGetOneController);

// Atualizar usuario
router.put(
  "/:id",
  TokenAuthenticator,
  ValidatorID,
  UserUpdateValidator,
  UserUpdateController
);

// Deletar usuario
router.delete("/:id", TokenAuthenticator, ValidatorID, UserDeleteController);

export default router;
