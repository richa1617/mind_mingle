import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const runQueries = async () => {
  await prisma.animal.deleteMany();
};

runQueries(); // Run the queries
