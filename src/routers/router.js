import { Router } from "express";
const router = Router();
import routerUser from "./routerUsers.js";
import routerAuth from "./routerAuth.js";

router.use("/users", routerUser);
router.use("/auth", routerAuth);

export default router;
