export default function getStudentIdsSum(students) {
  return students.reduce((sum, student) => sum + student.id, 0);
  // on met la valeur à 0 comme départ pour faire notre somme
}
