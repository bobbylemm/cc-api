import {Router} from "express";

import orders from "./order.routes";

const router: Router = Router();

router.use("/orders", orders);

export default router;