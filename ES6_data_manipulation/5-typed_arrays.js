export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  // Si l'ajout de la valeur n'est pas possible, un message d'erreur apparait

  // On crée un espace mémoire vide de 'length' octets.
  // C’est comme une boîte vide qu’on va remplir avec des données binaires.
  const buffer = new ArrayBuffer(length);

  // On crée une "vue" sur ce buffer, pour pouvoir y lire et écrire
  // des données facilement.Cette vue permet d’accéder aux données dans
  // différents formats (entier, flottant, etc.).
  const view = new DataView(buffer);

  // On écrit une valeur entière (sur 8 bits, donc entre -128 et 127)
  // à la position donnée dans le buffer.
  view.setInt8(position, value);

  return view;
}
