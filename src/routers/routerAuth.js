import { Router } from "express";

import UserLoginController from "../controllers/AuthController/AuthUser/UserLoginController.js";
import UserCreateValidator from "../middlewares/Validators/UsersValidatos/UserCreateValidator.js";
import UserRegisterController from "../controllers/AuthController/AuthUser/UserRegisterController.js";
import LoginValidator from "../middlewares/Validators/AuthValidatos/LoginValidator.js";
import TokenAuthenticator from "../middlewares/Validators/TokenAuthenticator.js";
import AdminRegisterController from "../controllers/AuthController/AuthAdmin/AdminRegisterController.js";
import AdminCreateValidator from "../middlewares/Validators/AdminsValidatos/AdminCreateValidator.js";
const router = Router();

// Rotas para usuarios comuns
router.post("/register", UserCreateValidator, UserRegisterController);
router.post("/login", LoginValidator, UserLoginController);

// Rotas para admins
router.post(
  "/register/admin",
  TokenAuthenticator,
  AdminCreateValidator,
  AdminRegisterController
);

export default router;
