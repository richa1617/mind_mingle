import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createMany = async () => {
  // await prisma.student.createMany({
  //   data: [
  //     {
  //       name: "Albert",
  //       classNumber: 1,
  //     },
  //     {
  //       name: "Richa",
  //       classNumber: 2,
  //     },
  //     {
  //       name: "Bla",
  //       classNumber: 5,
  //     },
  //     {
  //       name: "Jp",
  //       classNumber: 1,
  //     },
  //   ],
  // });
};

//createMany();

// const allStudent = async () => {
//   const students = await prisma.student.findMany();
//   console.log(students);
// };


const unique = async () => {
  const students = await prisma.student.findFirst({
    where: {
      classNumber: 2,
    },
  });

  console.log(students);
};

unique();
