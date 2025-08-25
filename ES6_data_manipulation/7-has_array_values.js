export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
  // La méthode .every() teste si TOUS les éléments du tableau
  // passent un test.
  // Ici, le test c'est : "est-ce que le Set contient cet élément ?"
  // Donc on vérifie si chaque élément du tableau 'array' est présent
  // dans le Set 'set'.
}
