import user from "./data/user.json";
import task from "./data/task.json";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seed = async () => {
  for (let i = 0; i < user.length; i++) {
    await prisma.user.create({
      data: user[i],
    });
  }

  for (let i = 0; i < task.length; i++) {
    await prisma.task.create({
      data: task[i],
    });
  }
};

seed();
