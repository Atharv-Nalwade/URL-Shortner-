const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const connect = require('./configs/database');
const urlController = require('./controllers/url-controller');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/:code',urlController.getUrl);
app.post('/urlShorten',urlController.createUrl);

app.listen('3000',async () => {
    console.log("Started on port 3000");
    await connect();
    console.log('Connected to the DB');
})