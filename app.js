import * as db from './utils/DbUtils';

var express = require('express');
var bodyParser = require('body-parser');
const app = express();//инициализация приложения 

db.setUpConnection();

app.use(bodyParser.urlencoded({extend: true}));
 app.use(bodyParser.json());

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
    db.deleteProduct(req.param.id).then(data => res.send(data));
});

app.put('/product/:id', (req, res) => {
    db.updateProduct(req.data)
});

const server = app.listen(3000, () => {
    console.log( "Listen port 3000");
});