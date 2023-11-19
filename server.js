const express = require('express');

const fs = require('fs');
const path = require('path');
const db = require('./models');

require('dotenv').config();

const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routes = require('./routes');

app.use('/api', routes(app));

app.get('*', (req, res) => {
  if (fs.existsSync(path.join(__dirname, 'build', 'index.html'))) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  } else {
    res.sendFile(path.join(__dirname, 'public', 'build.html'));
  }
});

app.locals.db = db;

// Coneccion con la base de datos
const connectToDatabase = () => {
  if (db) {
    db.sequelize.authenticate()
      .then(() => {
        console.log('Database connection successful.');
      })
      .catch((err) => {
        console.log('Database connection failed. Retrying in 5s...');
        console.log(err);
        setTimeout(connectToDatabase, 5000);
      });
  }
};

connectToDatabase();

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Server listening on port:', port);
});
