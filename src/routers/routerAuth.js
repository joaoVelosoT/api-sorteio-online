import { Router } from "express";
import UserRegisterController from "../controllers/AuthController/UserRegisterController.js";
import LoginValidator from "../middlewares/Validators/AuthValidatos/LoginValidator.js";

import UserLoginController from "../controllers/AuthController/UserLoginController.js";
import UserCreateValidator from "../middlewares/Validators/UsersValidatos/UserCreateValidator.js";
const router = Router();

router.post("/register", UserCreateValidator, UserRegisterController);
router.post("/login", LoginValidator, UserLoginController);

export default router;
