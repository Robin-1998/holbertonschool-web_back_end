console.log('Welcome to Holberton School, what is your name?');
// Active la lecture de l'entrée standard (le clavier)
process.stdin.resume();

// Écoute l'événement 'readable' → déclenché quand il y a des données disponibles à lire
process.stdin.on('readable', () => {
  // Lit les données entrées par l'utilisateur
  const name = process.stdin.read();

  // Affiche le nom de l'utilisateur tel qu'il a été entré (avec retour à la ligne inclus)
  process.stdout.write(`Your name is: ${name}`);

  // Vérifie si le terminal est "interactif" (TTY = terminal textuel)
  if (process.stdin.isTTY) {
    // Si oui, quitte immédiatement le programme
    process.exit();
  } else {
    // Sinon, affiche le message de fermeture avant de quitter
    process.stdout.write('This important software is now closing\n');
    process.exit();
  }
});
