// const { Router } = require("express");
// const router = Router();
// const routerUsers = require("./routerUsers");
import { Router } from "express";
const router = Router();
import routerUsers from "./routerUsers.js";

router.use("/users", routerUsers);

export default router;
