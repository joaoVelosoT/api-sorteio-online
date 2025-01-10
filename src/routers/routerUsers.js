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

const router = Router();

// Cadastrar usuarios
router.post("/", UserCreateValidator, UserCreateController);

// Listar usuarios
router.get("/", UserGetAllController);

// Listar usuario por id
router.get("/:id", ValidatorID, UserGetOneController);

// Atualizar usuario
router.put("/:id", ValidatorID, UserUpdateValidator, UserUpdateController);

// Deletar usuario
router.delete("/:id", ValidatorID, UserDeleteController);

// Logar usuario

export default router;
