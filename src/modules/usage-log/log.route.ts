import { Router } from "express";
import { usageLogController } from "./log.controller";
import auth from "../../middlewere/auth";
import { Role } from "../../generated/prisma/enums";

const usageLogRouter = Router();

usageLogRouter.post("/", auth([Role.Admin]), usageLogController.createUsageLog);
usageLogRouter.get("/", usageLogController.getUsageLogs);

export default usageLogRouter;
