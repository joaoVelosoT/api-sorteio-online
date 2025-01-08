const { Router } = require("express");
const CreateUserController = require("../controllers/UsersController/CreateUserController");
const CreateUserValidator = require("../middlewares/Validators/UsersValidatos/CreateUserValidator");
const router = Router();

// Cadastrar usuarios
router.post("/", CreateUserValidator, CreateUserController);

module.exports = router;
