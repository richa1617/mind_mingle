import studentData from "./data/students.json";
import teacherData from "./data/teachers.json";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seed = async () => {
// Seed every student
for (let i = 0; i < studentData.length; i++) {
const thisStudent = studentData[i];
await prisma.student.create({
data: thisStudent,
});
}
// Seed every teacher
for (let i = 0; i < teacherData.length; i++) {
const thisTeacher = teacherData[i];
await prisma.teacher.create({
data: thisTeacher,
});
}
};

seed();
