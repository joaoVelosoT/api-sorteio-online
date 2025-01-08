const { Router } = require("express");
const router = Router();
const routerUsers = require("./routerUsers");

router.use("/users", routerUsers);

module.exports = router;
