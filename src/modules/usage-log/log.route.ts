import { Router } from "express";
import { usageLogController } from "./log.controller";

const usageLogRouter = Router();

usageLogRouter.post("/", usageLogController.createUsageLog);
usageLogRouter.get("/", usageLogController.getUsageLogs);

export default usageLogRouter;
