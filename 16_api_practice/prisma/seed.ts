import course from "./data/course.json";
import student from "./data/student.json";
import student_course from "./data/student_course.json";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seed = async () => {
  for (let i = 0; i < course.length; i++) {
    await prisma.course.create({
      data: course[i],
    });
  }

  for (let i = 0; i < student.length; i++) {
    await prisma.student.create({
      data: student[i],
    });
  }

  for (let i = 0; i < student_course.length; i++) {
    await prisma.student_Course.create({
      data: student_course[i],
    });
  }
};

seed();
