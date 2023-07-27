import { toToken, toData } from "./jwt";
import { Request, Response, NextFunction } from "express";

export const AuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const headers = req.headers;

  if (
    headers["authorization"] && //
    headers["authorization"].split(" ")[0] === "Bearer" &&
    headers["authorization"].split(" ")[1]
  ) {
    const token = headers["authorization"].split(" ")[1];
    try {
      const data = toData(token);
      res.locals.userData = data; 

      next();
    } catch (e) {
      res.status(401).send({ message: "Token missing or invalid" });
      return;
    }
  } else {
    res.status(401).send({ message: "Token missing or invalid" });
    return;
  }
};
