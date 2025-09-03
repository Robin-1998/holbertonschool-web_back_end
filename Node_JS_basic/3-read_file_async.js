const fs = require('fs').promises; // Module Node.js pour lire des fichiers

async function countStudents(filepath) {
  try {
    // Lecture du fichier de façon asynchrone avec await
    const data = await fs.readFile(filepath, 'utf8');

    // On découpe le contenu en lignes et on enlève les lignes vides
    const lines = data.split(/\r?\n/).filter((line) => line.trim() !== '');

    // Si le fichier est vide (aucune ligne), on ne fait rien
    if (lines.length === 0) return;

    // On récupère les en-têtes (ex: firstname,lastname,field)
    const headers = lines[0].split(',');

    // On traite chaque ligne de données (on ignore celles invalides)
    const students = lines
      .slice(1)
      .map((line) => line.split(','))
      .filter((cols) => cols.length === headers.length);

    // Objet pour stocker les étudiants par "field"
    const fields = {};

    // On parcourt chaque étudiant pour les organiser par champ d'étude
    for (const student of students) {
      const entry = {};
      headers.forEach((h, i) => {
        entry[h.trim()] = student[i].trim();
      });

      const { field, firstname } = entry;
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    }

    // Affichage global
    console.log(`Number of students: ${students.length}`);

    // Affichage par champ d’étude
    for (const [field, names] of Object.entries(fields)) {
      const msg = `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
      console.log(msg);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
