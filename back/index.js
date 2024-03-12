// Récupération des modules express et imports
const express = require("express");
const session = require('express-session');
//express-session : à installer : faire npm install express-session
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


//route pour Ajouter un meuble
app.post("/admin",(req,res) => {
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

//route pour Ajouter un utilisateur et mot de passenpm start

app.post("/utilisateurs",(req,res) => {
  let utilisateurAjoute = req.body;

  // Création de la requête SQL pour insérer le mot de passe dans la table Motdepasse
  let addMotDePasse = `INSERT INTO Motdepasse (hash) VALUES (?)`;
  // Envoi de la requête pour insérer le mot de passe
  database.query(addMotDePasse, [utilisateurAjoute.motdepasse], (err, result) => {
  // Récupérer l'ID du mot de passe inséré
  const motdepasseId = result.insertId;
  // Création de la requête SQL pour insérer l'utilisateur dans la table Utilisateurs
  let addUtilisateur= `INSERT INTO Utilisateurs (nom, mail, motdepasse_id, telephone) VALUES (?, ?, ?, ?)`;
  // Envoi de la requête pour insérer l'utilisateur
    database.query(addUtilisateur, [utilisateurAjoute.nom, utilisateurAjoute.mail, motdepasseId, utilisateurAjoute.telephone], (err, result) => {
    console.log("Utilisateur ajouté avec succès.");
    res.status(201).json({ message: "Utilisateur ajouté avec succès.", motdepasse_id: motdepasseId });
      
    });
  });
});






//modification des paramètres d'un meuble. 
app.put("/meubles/:id", (req, res) =>{
  const recup = (req.body) // Récupération des données du form en format Json
  const id = parseInt(req.params.id) //Récupération de l'id via la route
  
  const nom = recup.nom
  const categorie_id = recup.categorie_id
  const descriptif = recup.descriptif
  const prix = recup.prix
  const dimension = recup.dimension
  const vendeur_id = recup.vendeur_id
  const acheteur_id = recup.acheteur_id
  const matiere_id = recup.matiere_id
  const couleur_id = recup.couleur_id
  
  //console.log("categorieId : ",categorieId)
  console.log("couleurId : ",couleur_id)
  console.log("ID : ",id)
  
  let paramQuery=[nom,categorie_id,descriptif,prix,dimension,vendeur_id,acheteur_id,matiere_id,couleur_id,id] //Bien mettre les paramètres dans ce tableau dans l'ordre des points d'interrogation de la requête
  database.query("UPDATE Meubles SET  nom = ?, categorie_id = ?, descriptif = ?, prix = ?, dimension = ?, vendeur_id = ?, acheteur_id = ?, matiere_id = ?, couleur_id = ?  WHERE id = ?",paramQuery,(err, result) => {
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

// essai pour afficher les 6 cards de la page home

app.get("/", function (req, res) { 
  let limit = req.query.limit || 6 ; 
  let query = `SELECT Meubles.nom, Meubles.descriptif, Meubles.photo, Meubles.prix FROM Meubles LIMIT ${limit}`;
  database.query(query,  (err, rows) => {
      if (err) {
        console.log("erreur dans la requête", err);
        res.status(500).send("erreur interne du serveur");
        return;
      } else {
      console.log("Resultat de la requête:", rows);
      res.json(rows);
     }
    });

  })

  //essai afficher la page product (détail)
  app.get("/product/:id", function (req, res) { 
  const productId = req.params.id; // Récupérer l'ID du produit à partir des paramètres de l'URL

  database.query("SELECT Meubles.nom, Meubles.descriptif, Meubles.photo, Meubles.prix, Meubles.stock, Meubles.dimension, Categories.nom AS categorie, Matieres.nom AS matiere FROM Meubles INNER JOIN Categories ON Meubles.categorie_id = Categories.id INNER JOIN Matieres ON Meubles.matiere_id = Matieres.id WHERE Meubles.id = ?", [productId], (err, rows, fields) => {
    if (err) {
      console.log("Erreur dans la requête", err);
      res.status(500).send("Erreur interne du serveur");
      return;
    }
    console.log("Résultat de la requête :", rows);
    res.json(rows);
  });
});

//Route get pour récupérer les meubles de la BDD
//Des paramètres peuvent être passés dans l'url de la requête coté front pour filtrer les meubles par couleur, catégorie, matière
//TODO, modifier cette route pour lui permettre de prendre en compte plusieurs filtres en meme temps (ex: je veux des chaises rouges en velours)
//TODO, une fois le cumul de filtres possible, ajouter notamment le filtre stock = 1 

app.get("/searchbar", function (req, res) { //suppression /meuble pas de page meuble >> Lise

// On récupère dans des variables les paramètres potentiellement passés dans l'url de la requete
  console.log(req.query)
  let couleur = req.query.couleur;
  let categorie = req.query.categorie;
  let matiere = req.query.matiere;
  let id = req.query.id;
  let prix = req.query.prix;
  let stock = req.query.stock;

  console.log("couleur : ",couleur)
  console.log("catégorie : ",categorie)
  console.log("matière : ",matiere)
  console.log("id : ",id)

//On gère le cas où aucun paramètre n'a été passé dans l'url de la requete (pas de filtre)
  if (couleur === undefined && categorie === undefined && matiere === undefined && id === undefined && prix === undefined && stock === undefined){

    database.query("SELECT Meubles.nom, Meubles.descriptif, Meubles.photo, Meubles.prix FROM Meubles", (err, rows, fields) => {
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
    database.query("SELECT Meubles.nom, Meubles.descriptif,Meubles.photo, Meubles.prix FROM Meubles INNER JOIN Couleurs ON Meubles.couleur_id = Couleurs.id WHERE Couleurs.nom = ?",[couleur],(err, rows, fields) => {
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
    database.query("SELECT Meubles.nom, Meubles.descriptif,Meubles.photo, Meubles.prix FROM Meubles INNER JOIN Categories ON Meubles.categorie_id = Categories.id WHERE Categories.nom = ?",[categorie],(err, rows, fields) => {
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
    database.query("SELECT Meubles.nom, Meubles.descriptif,Meubles.photo, Meubles.prix FROM Meubles INNER JOIN Matieres ON Meubles.matiere_id = Matieres.id WHERE Matieres.nom = ?",[matiere],(err, rows, fields) => {
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
    database.query("SELECT Meubles.nom, Meubles.descriptif,Meubles.photo, Meubles.prix FROM Meubles WHERE id = ?",[id],(err, rows, fields) => {
      if (err) {
        console.log("Le meuble n'a pas été trouvé",err.message);
        res.status(500).send("erreur interne du serveur");
        return;
      }
      console.log("Resultat de la requête:", rows);
      res.json(rows);
  
    });
  }   else if (prix != undefined) {
    database.query("SELECT Meubles.nom, Meubles.descriptif,Meubles.photo, Meubles.prix FROM Meubles WHERE id = ?",[prix],(err, rows, fields) => {
      if (err) {
        console.log("Le meuble n'a pas été trouvé",err.message);
        res.status(500).send("erreur interne du serveur");
        return;
      }
      console.log("Resultat de la requête:", rows);
      res.json(rows);
  
    });
  }
  else if (stock != undefined) {
    database.query("SELECT Meubles.nom, Meubles.descriptif,Meubles.photo, Meubles.prix FROM Meubles WHERE id = ?",[stock],(err, rows, fields) => {
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

app.get("/admin/matiere", function (req, res) {

  database.query("SELECT Matieres.nom FROM Matieres", (err, rows) => {
    if (err) {
      console.log("erreur dans la requête", err);
      res.status(500).send("erreur interne du serveur");
      return;
    }
    console.log("Resultat de la requête:", rows);
    res.json(rows);
  });
})

app.get("/admin/couleur", function (req, res) {

  database.query("SELECT Couleurs.nom FROM Couleurs", (err, rows) => {
    if (err) {
      console.log("erreur dans la requête", err);
      res.status(500).send("erreur interne du serveur");
      return;
    }
    console.log("Resultat de la requête:", rows);
    res.json(rows);
  });
})

app.get("/admin/categorie", function (req, res) {

  database.query("SELECT Categories.nom FROM Categories", (err, rows) => {
    if (err) {
      console.log("erreur dans la requête", err);
      res.status(500).send("erreur interne du serveur");
      return;
    }
    console.log("Resultat de la requête:", rows);
    res.json(rows);
  });
})

//Route pour supprimer un meuble en fonction de son id (afin de ne PAS supprimer toute la table ;) )
//Pour faire le test on a créé une chaise test dans la table afin de ne pas supprimer les données créées par Jean-Clément
app.delete("/admin/:id", function (req, res) {
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

// Route get récupérer meubles where en stock = true. 
//TODO: Sera à fusionner avec la route GET globale une fois qu'elle pourra cumuler plusieurs paramètres
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

// TODO ROUTES
//Voir la route GET /meubles à améliorer
//Route POST commande pour ajout nouvel article au panier (qui ajoute une ligne à la table commande en BDD)
//Route GET commande (pour affichage panier)
//Et plus si affinités!!

app.get("/meubles", function (req, res) {
  database.query("SELECT Meubles.nom, Meubles.descriptif, Meubles.photo, Meubles.prix, Meubles.stock, Couleurs.nom AS couleur, Categories.nom AS categorie, Matieres.nom AS matiere FROM Meubles INNER JOIN Couleurs ON Meubles.couleur_id = Couleurs.id INNER JOIN Categories ON Meubles.categorie_id = Categories.id INNER JOIN Matieres ON Meubles.matiere_id = Matieres.id", (err, rows, fields) => {
    if (err) {
      console.log("erreur dans la requête", err);
      res.status(500).send("erreur interne du serveur");
      return;
    }
    console.log("Resultat de la requête:", rows);
    res.json(rows);
  });
});


//SESSIONS : 

//body-parser : permet de récupérer les infos dans le json. extended: true pour permettre tous les types de valeur, 
//false: string ou array
app.use(express.urlencoded({ extended: true }));
//Utilisation de middleware session
app.use(session({
    //sécurise la session, doit être changé régulièrement
    secret: 'lhjhsdgaiy54:s47z',
    //empêche une session d'écraser l'autre pour un même utilisateur
    resave: false,
    //permet un retour sur la session précédente lors d'un nouvel accès à la page
    saveUninitialized: false
  })
);
app.post('/inscription', (req, res) => {
  const { password, username } = req.body;
  req.session.user = { username };
  let addPassword = `INSERT INTO Motdepasse (hash) VALUES (?)`;

  let addUser =  `INSERT INTO Utilisateurs (nom, motdepasse_id) SELECT nom, id FROM Utilisateurs INNER JOIN Motdepasse ON Utilisateurs.motdepasse_id = Motdepasse.id`;

  database.query(addPassword, [password], (err, result) => {
    if (err) {
      // Gérer les erreurs liées à l'insertion du mot de passe
      res.status(500).send("Erreur lors de l'insertion du mot de passe");
    } else {
      let motdepasse_id = result.insertId;
      database.query(addUser, [username, motdepasse_id], (err, result) => {
        if (err) {
          // Gérer les erreurs liées à l'insertion de l'utilisateur
          res.status(500).send("Erreur lors de l'insertion de l'utilisateur");
        } else {
          res.redirect('/login');
        }
      });
    }
  });
});

app.get('/login', (req, res) => {
  if (req.session.user) {
    // User is authenticated, render dashboard
    res.render('login')
  } else {
    // User is not authenticated, redirect to login page
    res.redirect('/inscription')
  }
})

//Vérifier la session du panier
app.use((req, res, next) => {
  req.session.panier = req.session.panier || {}
  next()
});

//Chemin vers le html dans le dossier public : 
//TODO: à changer!!
app.use(express.static('public'));

//Trame de la requête panier qui récupère la session
//TODO rajouter requête de récupéréation des lignes dans la table commande qui correspondent à la session/utilisateur
app.get('/panier', (req, res) => {
  //Récupération de la réponse de la requête en json, avec chemin vers panier
  res.json(req.session.panier);
});

//Requête d'envoi dans le panier
//TODO rajouter ici requête pour envoyer l'article dans la table commande
app.post('/', (req, res) => { 
  //Envoyer au panier et rester sur la page
  req.session.panier[req.query.name] = req.body.qty;
  res.redirect('/')
});



