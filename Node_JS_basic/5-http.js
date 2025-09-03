const http = require('http');
const url = require('url');
const fs = require('fs').promises;

const app = http.createServer(async (req, res) => {
  const { pathname } = url.parse(req.url); // destructuring

  if (pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
    return;
  }

  if (pathname === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    try {
      const filepath = process.argv[2];
      if (!filepath) {
        res.end('This is the list of our students\nCannot load the database');
        return;
      }

      const data = await fs.readFile(filepath, 'utf8');
      const lines = data.split(/\r?\n/).filter((line) => line.trim() !== '');

      if (lines.length === 0) {
        res.end('This is the list of our students\nCannot load the database');
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

      res.end(responseText);
    } catch (err) {
      res.end('This is the list of our students\nCannot load the database');
    }
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not Found');
});

app.listen(1245, () => {
  console.log('Server running on port 1245');
});

module.exports = app;
