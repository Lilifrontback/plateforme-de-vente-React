// Récupération des modules express et imports
const express = require("express");
const app = express();
const port = 3000;
const databaseCall = require("./connexionDB.json");
const mysql = require("mysql");
const database = mysql.createConnection(databaseCall);
database.connect();

//Fonction qui écoute si le serveur est lancé
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//route post pour Ajouter un meuble
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

// Route get test qui permet de tester le serveur sur un exemple
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Route get pour récupérer les meubles de la BDD
//Des paramètres peuvent être passés dans l'url de la requête coté front pour filtrer les meubles par couleur, catégorie, matière
//TODO, modifier cette route pour lui permettre de prendre en compte plusieurs filtres en meme temps (ex: je veux des chaises rouges en velours)
//TODO, une fois le cumul de filtres possible, ajouter notamment le filtre stock = 1 

app.get("/meubles", function (req, res) {

// On récupère dans des variables les paramètres potentiellement passés dans l'url de la requete
  console.log(req.query)
  let couleur = req.query.couleur;
  let categorie = req.query.categorie;
  let matiere = req.query.matiere;
  let id = req.query.id;

  console.log("couleur : ",couleur)
  console.log("catégorie : ",categorie)
  console.log("matière : ",matiere)
  console.log("id : ",id)

//On gère le cas où aucun paramètre n'a été passé dans l'url de la requete (pas de filtre)
  if (couleur === undefined && categorie === undefined && matiere === undefined && id === undefined){

    database.query("SELECT * FROM Meubles", (err, rows, fields) => {
      if (err) {
        console.log("erreur dans la requête", err);
        res.status(500).send("erreur interne du serveur");
        return;
      }
      console.log("Resultat de la requête:", rows);
      res.json(rows);
    });
  }

  //On gère au cas par cas les paramètres passés. Pour l'instant la fonction ne gère pas plusieurs paramètres en meme temps

  else if (couleur != undefined) {
    database.query("SELECT * FROM Meubles INNER JOIN Couleurs ON Meubles.couleur_id = Couleurs.id WHERE Couleurs.nom = ?",[couleur],(err, rows, fields) => {
      if (err) {
        console.log("Les meubles de cette couleur n'ont pas été trouvés",err.message);
        res.status(500).send("erreur interne du serveur");
        return;
      }
      console.log("Resultat de la requête:", rows);
      res.json(rows);
  
    });
  }

  else if (categorie != undefined) {
    database.query("SELECT * FROM Meubles INNER JOIN Categories ON Meubles.categorie_id = Categories.id WHERE Categories.nom = ?",[categorie],(err, rows, fields) => {
      if (err) {
        console.log("Les meubles de cette categorie n'ont pas été trouvés",err.message);
        res.status(500).send("erreur interne du serveur");
        return;
      }
      console.log("Resultat de la requête:", rows);
      res.json(rows);
  
    });
  }

  else if (matiere != undefined) {
    database.query("SELECT * FROM Meubles INNER JOIN Matieres ON Meubles.matiere_id = Matieres.id WHERE Matieres.nom = ?",[matiere],(err, rows, fields) => {
      if (err) {
        console.log("Les meubles de cette categorie n'ont pas été trouvés",err.message);
        res.status(500).send("erreur interne du serveur");
        return;
      }
      console.log("Resultat de la requête:", rows);
      res.json(rows);
  
    });
  }

  else if (id != undefined) {
    database.query("SELECT * FROM Meubles WHERE id = ?",[id],(err, rows, fields) => {
      if (err) {
        console.log("Le meuble n'a pas été trouvé",err.message);
        res.status(500).send("erreur interne du serveur");
        return;
      }
      console.log("Resultat de la requête:", rows);
      res.json(rows);
  
    });
  }

});

// Route delete by id pour supprimer un meuble de la BDD en passant un ID dans la requête
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

// Route get récupérer meubles where en stock = true. TODO : Sera à fusionner avec la route GET globale une fois qu'elle pourra cumuler plusieurs paramètres
app.get("/meublesenstock", function (req, res) {
  database.query("SELECT * FROM Meubles WHERE stock = 1", (err, rows, fields) => {
    if (err) {
      console.log("erreur dans la requête", err);
      res.status(500).send("erreur interne du serveur");
      return;
    }
    console.log("Resultat de la requête:", rows);
    res.json(rows);
  });
});


//Route get by id where en stock = true
app.get("/meublesenstock/:id",  (req, res) => {
  const id = parseInt(req.params.id)
  console.log("ID Récupéré: ",id)
  database.query("SELECT * FROM Meubles WHERE stock = 1 AND id = ?",[id],(err, rows, fields) => {
    if (err) {
      console.log("Le meuble n'a pas été trouvé",err.message);
      res.status(500).send("erreur interne du serveur");
      return;
    }
    console.log("Resultat de la requête:", rows);
    res.json(rows);
 
  });
})

//ROUTES TODO
//Voir la route GET /meubles à améliorer
//Route POST commande pour ajout nouvel article au panier (qui ajoute une ligne à la table commande en BDD)
//Route GET commande (pour affichage panier)
//Et plus si affinités!!

