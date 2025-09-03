const express = require('express');
const fs = require('fs').promises;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const filepath = process.argv[2];
    if (!filepath) {
      res.send('This is the list of our students\nCannot load the database');
      return;
    }

    const data = await fs.readFile(filepath, 'utf8');
    const lines = data.split(/\r?\n/).filter((line) => line.trim() !== '');

    if (lines.length === 0) {
      res.send('This is the list of our students\nCannot load the database');
      return;
    }

    const headers = lines[0].split(',');
    const students = lines
      .slice(1)
      .map((line) => line.split(','))
      .filter((cols) => cols.length === headers.length);

    const fields = {};

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

    let responseText = 'This is the list of our students\n';
    responseText += `Number of students: ${students.length}\n`;

    for (const [field, names] of Object.entries(fields)) {
      responseText += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
    }

    res.send(responseText);
  } catch (err) {
    res.send('This is the list of our students\nCannot load the database');
  }
});

app.listen(1245, () => {
  console.log('Server running on port 1245');
});

module.exports = app;
