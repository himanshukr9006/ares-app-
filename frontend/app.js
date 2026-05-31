//express app that serves html files

const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const URL = process.env.BACKEND_URL || 'http://backend:8000/api';

const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

app.get('/', async function (req, res) {
  const options = {
    method: 'GET'
  };

  try {
    let response = await fetch(URL, options);
    response = await response.json();

    console.log(response);

    res.render('index', response);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: 'Internal Server Error.'
    });
  }
});

app.listen(3000, function () {
  console.log('Ares listening on port 3000!');
});