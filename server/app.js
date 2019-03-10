import * as db from './utils/DbUtils.js';
import {serverPort} from './config/config.json';
import cors from 'cors';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();//инициализация приложения 

db.setUpConnection();

app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.json());
app.use(cors({origin: '*'})); // ui and backend different port

app.get('/', (req, res) => {
});

app.get('/products', (req, res) => {
  db.listProduct().then(data => res.send(data));
});

app.get('/product/:id', (req, res) => {
  db.findById(req.param.id).then(data => res.send(data));
});

app.post('/product', (req, res) => {
  db.createProduct(req.body).then(data => res.send(data));
});

app.delete('/product/:id', (req, res) => {
  db.deleteProduct(req.params.id).then(data => res.send(data));
});

app.put('/product/:id', (req, res) => {
  db.updateProduct(req.data)
});

app.get('/admin', (req, res) => {
  var model = {title: {main: "hello Admin!", subtitle: "subtitle"}, layout: false};
  res.render('index.html', {
    isMain: true
  });
});

const server = app.listen(serverPort, () => {
  console.log(`Listen port ${serverPort}`);
});