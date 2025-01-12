import { Router } from "express";
const router = Router();
import routerUser from "./routerUsers.js";
import routerAuth from "./routerAuth.js";
import routerAdmin from "./routerAdmins.js";

router.use("/users", routerUser);
router.use("/auth", routerAuth);
router.use("/admins", routerAdmin);


export default router;
