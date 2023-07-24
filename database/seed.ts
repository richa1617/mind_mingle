import student from "./prisma/data/student.json";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seed = async () => {
  for (let i = 0; i < student.length; i++) {
    const s = student[i];
    await prisma.student.create({
      data: s,
    });
  }
};

seed();
