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

app.get("/meubles/:id",  (req, res) => {
  const id = parseInt(req.params.id)
  console.log("ID Récupéré: ",id)
  database.query("SELECT * FROM Meubles WHERE id = ?",[id],(err, rows, fields) => {
    if (err) {
      console.log("Le meuble n'a pas été trouvé",err.message);
      res.status(500).send("erreur interne du serveur");
      return;
    }
    console.log("Resultat de la requête:", rows);
    res.json(rows);
 
  });
})

app.delete("/meubles/:id", function (req, res) {
  const id = parseInt(req.params.id);
  console.log("ID Récupéré : ", id);
  database.query(
    "DELETE FROM Meubles WHERE id = ?",
    [id],
    (err, rows, fields) => {
      if (err) {
        console.log("erreur dans la requête", err);
        res.status(500).send("erreur interne du serveur");
        return;
      }
      console.log("Resultat de la requête:", rows);
      res.json(rows);
    }
  );
});