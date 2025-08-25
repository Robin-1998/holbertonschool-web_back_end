export default function getStudentsByLocation(students, city) {
  return students.filter((b) => b.location === city);
}
