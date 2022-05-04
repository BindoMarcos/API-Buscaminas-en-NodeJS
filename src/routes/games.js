const express = require('express');
const routes = express.Router();

const dbConn = require('../database');
const setState = require('../services/services');

routes.get('/', (req, res) => {
    let tableName = "games";
    let query = `CREATE TABLE IF NOT EXISTS ${tableName} ( id INT NOT NULL AUTO_INCREMENT, created TIMESTAMP NOT NULL, state VARCHAR(30) NOT NULL, cells JSON NOT NULL, PRIMARY KEY  (id))`;
    dbConn.query(query, (err, rows, fields) => {
        if (!err) {
            res.json({ Tabla: tableName + " creada con exito" });
            console.log(`Tabla ${tableName} creada con exito`);
        } else {
            console.log(err);
        }
    });
});

routes.get('/game/:id', (req, res) => {
    dbConn.query('SELECT * FROM games WHERE id = ?', [req.params.id], (err, rows) => {
        if (!err) {
            res.json(rows);
        } else {
            res.json({ Error: err });
        }

    });
});

routes.get(['/game', '/game/'], (req, res) => {
    res.json({ Error: "Please, create a game or pass an Game Id" });
});

routes.post('/game', (req, res) => {
    let state = setState(1);
    let cells = "[]";
    dbConn.query('INSERT INTO games (state , cells) VALUES (?,?)', [state, cells], (err, rows) => {

        if (!err) {
            res.json({ Status: 'Game Created' });
        } else {
            res.json({ Error: err });
        }
    });
});


module.exports = routes;