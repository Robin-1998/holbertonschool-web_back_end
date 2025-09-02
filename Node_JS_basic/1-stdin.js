console.log('Welcome to Holberton School, what is your name?');
// display a message

// Active la lecture de l'entrée standard (le clavier)
process.stdin.resume();

// Pour convertir automatiquement en chaîne
process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const name = data.trim(); // Retire le retour à la ligne automatique

  console.log(`Your name is: ${name}`);
  console.log('This important software is now closing');

  process.exit();
});
