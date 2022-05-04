const mysql = require('mysql');

const dbConnection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'buscaminas'
});

dbConnection.connect((err) => {
    if (err) {
      console.error(err);
      return;
    } else {
      console.log("Connected to Database");
    }
});

module.exports = dbConnection;