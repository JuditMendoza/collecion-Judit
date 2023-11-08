const express = require('express');
const cors = require('cors');
const login = require('./services/login'); // Importa tu módulo login.js

const port = 3030;

const app = express();
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true
    })
);
app.use(cors());

app.get('/', function (req, res) {
    res.json({ message: 'Judit Mendoza Santana' });
});

app.get('/login', async function (req, res, next) {
    console.log(req.query);
    try {
        // Utiliza la función getUserData del módulo login
        const userData = await login.getUserData(req.query.user, req.query.password);
        res.json(userData);
    } catch (err) {
        console.error(`Error while getting data`, err.message);
        next(err);
    }
});

app.listen(port);
console.log('API escuchando en el puerto ' + port);