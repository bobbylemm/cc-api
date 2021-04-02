import { Router } from "express";
import orderRoutes from "./order/orderRoutes";
import authRoutes from "./auth/authRoutes";

const router = Router();

router.get("/", (req, res) => {
  res.json({ msg: "hello" });
});

router.use("/auth", authRoutes);

router.use("/orders", orderRoutes);

export default router;