const express = require('express');
const routes = express.Router();

const dbConn = require('../database');

routes.get('/', (req, res) => {
    let tableName = "games";
    let query = `CREATE TABLE IF NOT EXISTS ${tableName} ( id INT NOT NULL AUTO_INCREMENT, created TIMESTAMP NOT NULL, state VARCHAR(30) NOT NULL, cells VARCHAR(255) NOT NULL, PRIMARY KEY  (id))`;
    dbConn.query(query, (err, rows, fields) => {
        if (!err) {
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

routes.post('/game', (req, res) => {
    dbConn.query('INSERT INTO games set ?', [req.body], (err, rows) => {
        if (!err) {
            res.json({ Status: 'Game Saved' });
        } else {
            res.json({ Error: err });
        }
    });
});


module.exports = routes;