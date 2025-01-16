import { Router } from "express";

import UserLoginController from "../controllers/AuthController/AuthUser/UserLoginController.js";
import UserCreateValidator from "../middlewares/Validators/UsersValidatos/UserCreateValidator.js";
import UserRegisterController from "../controllers/AuthController/AuthUser/UserRegisterController.js";
import LoginValidator from "../middlewares/Validators/AuthValidatos/LoginValidator.js";
import TokenAuthenticator from "../middlewares/Validators/TokenAuthenticator.js";
import AdminRegisterController from "../controllers/AuthController/AuthAdmin/AdminRegisterController.js";
import AdminCreateValidator from "../middlewares/Validators/AdminsValidatos/AdminCreateValidator.js";
import LoginAdminValidator from "../middlewares/Validators/AuthValidatos/LoginAdminValidator.js";
import AdminLoginController from "../controllers/AuthController/AuthAdmin/AdminLoginController.js";
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

router.post("/login/admin", LoginAdminValidator, AdminLoginController);

export default router;
