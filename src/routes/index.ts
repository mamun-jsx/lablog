import { Router } from "express";
import userRouter from "../modules/user/user.route";
import equipmentRoute from "../modules/equipment/rquipment.route";
import usageLogRouter from "../modules/usage-log/log.route";

const routes = Router();

routes.use("/user", userRouter);

routes.use("/equipment", equipmentRoute);
routes.use("/usage-log", usageLogRouter);

export default routes;
