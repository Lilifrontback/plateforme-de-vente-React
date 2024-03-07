const express = require("express");
const app = express();
const port = 3000;
const databaseCall = require("./connexionDB.json");
const mysql = require("mysql");
const database = mysql.createConnection(databaseCall);
app.use(express.json());

database.connect();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//route pour Ajouter un meuble
app.post("/meubles",(req,res) => {
  let meubleAjoute
  console.log(req.body) //ça pourra changer en fonction du formulaire créé en front
  meubleAjoute=req.body
  console.log(meubleAjoute.nom)
  //création de la requête
  let addMeubles = `INSERT INTO Meubles 
  (
      nom, categorie_id, descriptif, prix, dimension, vendeur_id, acheteur_id, matiere_id, photo, couleur_id, stock
  )
  VALUES
  (
      ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? 
  )`; // Les ? seront remplacés par les valeurs à ajouter
  //envoie de la requête
  database.query(addMeubles,[meubleAjoute.nom,meubleAjoute.categorie_id,meubleAjoute.descriptif,meubleAjoute.prix,meubleAjoute.dimension, meubleAjoute.vendeur_id,meubleAjoute.acheteur_id,meubleAjoute.matiere_id,meubleAjoute.photo,meubleAjoute.couleur_id,meubleAjoute.stock])
  res.status(201).json({
    message: 'Objet créé !'
  });
});


// création de la route GET meuble => récupérer la table meuble dans SQL
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
