const express = require("express");
const app = express();
const port = 3000;
const databaseCall = require("./connexionDB.json");
const mysql = require("mysql");
const database = mysql.createConnection(databaseCall);

database.connect();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/meubles", function (req, res) {
  database.query("SELECT * FROM Meubles", (err, rows, fields) => {
    if (err) {
      console.log("erreur dans la requête", err);
      res.status(500).send("erreur interne du serveur");
      return;
    }
    console.log("Resultat de la requête:", rows);
    res.json(rows);
  });
});
