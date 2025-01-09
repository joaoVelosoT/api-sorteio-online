// const { Router } = require("express");
import { Router } from "express";
import CreateUserValidator from "../middlewares/Validators/UsersValidatos/CreateUserValidator.js";
import CreateUserController from "../controllers/UsersController/CreateUserController.js";
import GetAllUserController from "../controllers/UsersController/GetAllUserController.js";
import GetOneUserController from "../controllers/UsersController/GetOneUserController.js";
import ValidatorID from "../middlewares/Validators/ValidatorID.js";
import UpdateUserController from "../controllers/UsersController/UpdateUserController.js";
import UpdateUserValidator from "../middlewares/Validators/UsersValidatos/UpdateUserValidator.js";
import DeleteUserController from "../controllers/UsersController/DeleteUserController.js";

const router = Router();

// Cadastrar usuarios
router.post("/", CreateUserValidator, CreateUserController);

// Listar usuarios
router.get("/", GetAllUserController);

// Listar usuario por id
router.get("/:id", ValidatorID, GetOneUserController);

// Atualizar usuario
router.put("/:id", ValidatorID, UpdateUserValidator, UpdateUserController);

// Deletar usuario
router.delete("/:id", ValidatorID, DeleteUserController);

export default router;
