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

const queris = async () => {
  const firstStudent = await prisma.student.findFirst({
    where: {
      classNumber: 2,
    },
  });
  //console.log(firstStudent);

  // const allStudent = await prisma.student.findMany();
  // console.log(allStudent);

  const ageMoreThenFour = await prisma.student.findMany({
    where: {
      age: {
        gte: 4,
      },
    },
    select: {
      name: true,
    },
  });

  //console.log(ageMoreThenFour)

  const Id2 = await prisma.student.findUnique({
    where: {
      id: 2,
    },
  });

  //console.log(Id2);

  const studentClass5 = await prisma.student.findMany({
    where: {
      classNumber: 5,
    },
  });

  //console.log(studentClass5);;

  const update = await prisma.student.update({
    where: {
      id: 3,
    },
    data: {
      classNumber: 3,
    },
  });

  //console.log(update);
  const allStudents = await prisma.student.findMany();
  console.log(allStudents.length);
 
  await prisma.student.delete({
    where: {
      id: 2,
    },
  });
  // Get the amount of students after the query
  const allStudentsAfterDelete = await prisma.student.findMany();
  console.log(allStudentsAfterDelete.length);
};

queris();
