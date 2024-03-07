const express = require("express");
const app = express();
const port = 3000;
//On récupère les paramètres de connection de la BDD
const databaseCall = require("./connexionDB.json");
const mysql = require("mysql"); //faire un npm install mysql dans le dossier du projet
//Appel de la base de donnée
const database = mysql.createConnection(databaseCall); 
app.use(express.json());
//connection à la base de donnée
database.connect();

//Permet de lancer le serveur
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//Route de test pour vérifier que le serveur est bien lancé 
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
  )`; // Les ? seront remplacés par les valeurs à ajouter Attention à bien mettre les variables à ajouter dans le même ordre que la liste ci-dessus
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


//modification des paramètres d'un meuble. /!\ seulement fait pour couleur_id mais possible de le faire pour tous
app.put("/meubles/:id", (req, res) =>{
  const recup = (req.body) // Récupération des données du form en format Json
  const id = parseInt(req.params.id) //Récupération de l'id via la route
  const couleurId = recup.couleur_id
  console.log("couleurId recupéré : ",couleurId)
  console.log("ID Récupéré: ",id)
  let paramQuery=[couleurId,id] //Bien mettre les paramètres dans ce tableau dans l'ordre des points d'interrogation de la requête
  database.query("UPDATE Meubles SET couleur_id = ? WHERE id = ?",paramQuery,(err, result) => {
    if(err){
      res.json({
        status:400,
        message:err
      })
    }

    else{
      res.json({
        status:200,
        message:result
      })
    }
  });
})


//Route pour récupérer un meuble en fonction de son id
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

//Route pour supprimer un meuble en fonction de son id (afin de ne PAS supprimer toute la table ;) )
//Pour faire le test on a créé une chaise test dans la table afin de ne pas supprimer les données créées par Jean-Clément
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
