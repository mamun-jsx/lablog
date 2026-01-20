import { NextFunction, Request, Response } from "express";
import { Role } from "../generated/prisma/enums";
import jwt, { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user: JwtPayload;
    }
  }
}

const auth = (roles?: Role[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) res.send("please provide token");

    try {
      const decoded = jwt.verify(token as string, "very secret");
      if (!decoded) return res.send("unAuthorize");
      req.user = decoded as JwtPayload;

      if (roles && roles.includes(req.user.role)) return res.send("unAuthorize");
         next();
    } catch (error) {
      console.log(error);
    }
  };
};
export default auth;
