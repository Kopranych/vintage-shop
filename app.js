var express = require('express');
var bodyParser = require('body-parser');
const app = express();//инициализация приложения 

// app.use(bodyParser.urlencoded({extend: true}));
// app.use(bodyParser.json());
app.get("/", (req, res) => {
    res.send('afdsfsd');
});

const server = app.listen(3000, () => {
    console.log( "Listen port 3000");
});