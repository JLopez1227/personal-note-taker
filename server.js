const express = require('express');
const path = require('path');
const fs = require('fs')
const util = require('util')
const dbData = require('./db/db.json');
const dbPath = './db/db.json'
const PORT = process.env.PORT || 3001 ;
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
  });

app.get('/api/notes', (req, res) => {
  readFileAsync(dbPath, 'utf8').then(notes => {
    return res.json(JSON.parse(notes));
  })
});

app.post('/api/notes', (req, res) => {
  readFileAsync(dbPath, 'utf8').then(notes => {
    writeFileAsync(dbPath, JSON.stringify([...JSON.parse(notes), req.body])).then(data => {
      return res.json({
        message: 'Note successfully added!'
      })
    })
  })
  
})

app.listen(PORT, () => {
  console.log(`Note Taker App listening at http://localhost:${PORT}`);
});
