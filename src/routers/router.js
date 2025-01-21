import { Router } from "express";
const router = Router();
import routerUser from "./routerUsers.js";
import routerAuth from "./routerAuth.js";
import routerAdmin from "./routerAdmins.js";
import routerRaffle from "./routerRaffle.js";

router.use("/users", routerUser);
router.use("/auth", routerAuth);
router.use("/admins", routerAdmin);
router.use("/raffles", routerRaffle);

export default router;
