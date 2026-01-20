import { RequestHandler } from "express";
import { prisma } from "../../lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register: RequestHandler = async (req, res) => {
  const payload = req.body;
  const hashPassword = await bcrypt.hash(payload.password, 12);

  const user = await prisma.user.create({
    data: { ...payload, password: hashPassword },
  });
  res.send({ message: "register successfully", data: user });
};

const login: RequestHandler = async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({
    where: { email },
  });
  if (!user) return res.send({ message: "user not found " });
  const matchPass = await bcrypt.compare(password, user.password);
  if (!matchPass) return res.send({ message: "Id and password did not match" });

  const token = jwt.sign({ id: user.id, role: user.role }, "very secret", {
    expiresIn: "7d",
  });
  res.send({ message: "login successfully ", token });
};
export const userController = { register, login };
