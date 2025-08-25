export default function getListStudentIds(dax) {
  if (!Array.isArray(dax)) {
  // si l'argument n'est pas un tableau, la fonction retourne un tableau vide
    return [];
  }
  else {
    return dax.map((b) => b.id);
    // on parcours chaque élément du tableay dax et retourne un nouveau
    // tableau contenant uniquement la propriété id de chaque élément b
}
}
