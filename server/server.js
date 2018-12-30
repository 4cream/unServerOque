const express = require('express');
const app = express();

require('./config/config');

const bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());



app.get('/usuario', (req, res) => {

  let salida = {
    nombre:'diego',
    edad:30,
    url: req.url
  }

  res.json(salida);

});

app.post('/usuario', (req, res) => {

  let body = req.body;

  res.json({
    persona:body
  });

});

app.put('/usuario/:id', (req, res) => {

  let id = req.params.id;

  res.json({
    id
  });

});

app.delete('/usuario', (req, res) => {

  res.json("Borrando con DELETE");

});


app.listen(process.env.PORT, () => {
  console.log("Escuchando puerto: ", process.env.PORT);
});
