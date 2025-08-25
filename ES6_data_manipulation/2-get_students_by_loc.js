export default function getStudentsByLocation(students) {
  return students.filter((b) => b.location === 'San Francisco');
}
