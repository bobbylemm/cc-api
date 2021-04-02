import { Router } from "express";
import orderRoutes from "./order/orderRoutes";

const router = Router();

router.get("/", (req, res) => {
  res.json({ msg: "hello" });
});

router.use("/orders", orderRoutes);

export default router;