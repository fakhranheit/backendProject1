const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Purwadhikamsig1",
  database: "db_game",
  port: "3306",
  multipleStatements: "true"
});

module.exports = db;
