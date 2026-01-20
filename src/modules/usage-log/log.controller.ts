import { RequestHandler } from "express";
import { prisma } from "../../lib/prisma";

const createUsageLog: RequestHandler = async (req, res) => {
  try {
    const payload = req.body;
    const log = await prisma.usageLog.create({
      data: { ...payload, userId: req.user.id },
    });
    res.send({ message: "usage log created", data: log });
  } catch (error) {
    res.send({ message: "log created failed", error });
    console.log(error);
  }
};

const getUsageLogs: RequestHandler = async (req, res) => {
  try {
    const log = await prisma.usageLog.findMany({
      include: {
        user: true,
        equipment: true,
      },
    });
    res.send({ message: "usage log data is retrieve", data: log });
  } catch (error) {
    res.send({ message: "log created failed", error });
  }
};

export const usageLogController = {
  createUsageLog,
  getUsageLogs,
};
