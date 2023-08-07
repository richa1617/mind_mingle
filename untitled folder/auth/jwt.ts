import jwt from "jsonwebtoken";

const secret = "apple-pie";

export const toToken = (data: any) => {
  const token = jwt.sign(data, secret, { expiresIn: "14 days" });
  return token;
};

export const toData = (token: string) => {
  const data = jwt.verify(token, secret);
  return data;
};
