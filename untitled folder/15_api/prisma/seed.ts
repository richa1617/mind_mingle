import user from "./data/user.json";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seed = async () => {
  for (let i = 0; i < user.length; i++) {
    await prisma.user.create({
      data: user[i],
    });
  }
};

seed();
