//Récupération des modules express
const express = require('express');
const session = require('express-session');
//express-session : à installer
const app = express();
const port = 3000;

//body-parser : permet de récupérer les infos dans le json. extended: true pour permettre tous les types de valeur, false: string ou array
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

//Vérifier la session du panier
app.use((req, res, next) => {
  req.session.panier = req.session.panier || {}
  next()
});

//Chemin vers le html dans le dossier public : à changer !!
app.use(express.static('public'));

//Requête de session
app.get('/panier', (req, res) => {
  //Récupération de la réponse de la requête en json, avec chemin vers panier
  res.json(req.session.panier);
});

//Requête d'envoi dans le panier
app.post('/', (req, res) => { 
  //Envoyer au panier et rester sur la page
  req.session.panier[req.query.name] = req.body.qty;
  res.redirect('/')
});

//Vérification de la connexion sur le port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
