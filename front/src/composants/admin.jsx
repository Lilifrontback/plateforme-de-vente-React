import * as React from 'react';
// import fonctions tableau, bouton de la librairie chakra

import { fetchListeCategorie,fetchListeMatiere ,fetchListeCouleur, fetchMeublesEnStock, fetchAjoutMeuble,fetchSuppressionMeuble } from '../services/apiService';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button, 
  Stack,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  
} from '@chakra-ui/react';


//Import données couleur
let couleurs= await fetchListeCouleur()
    .catch(error => console.error('Error:', error))
//Import données matiere
let matieres= await fetchListeMatiere()
    .catch(error => console.error('Error:', error))

//Import données categorie
let categories= await fetchListeCategorie()
    .catch(error => console.error('Error:', error))
    
function Admin() {

  const [meubles, setMeubles]= React.useState([])
  const [newNom, setName] = React.useState('');
  const [newDescription, setDescription] = React.useState('');
  const [newPhoto, setPhoto] = React.useState('');
  const [newPrix, setPrix] = React.useState('');
  const [newStock, setStock] = React.useState('');
  const [newDimension, setDimension] = React.useState('');
  const nomChange = (event) => setName(event.target.value)
  const DescriptionChange = (event) => setDescription(event.target.value)
  const photoChange = (event) => setPhoto(event.target.value)
  const prixChange = (event) => setPrix(event.target.value)
  const stockChange = (event) => setStock(event.target.value)
  const dimensionChange = (event) => setDimension(event.target.value)

  // Définition d'une fonction pour mettre à jour les données des meubles
  function updateMeuble(){
        //Import données meubles
        fetchMeublesEnStock()
        // Une fois que les données sont récupérées avec succès,
        .then(meubles=>setMeubles(meubles))// mise à jour des données des meubles avec les nouvelles données
        // En cas d'erreur lors de la récupération des données,
        .catch(error => console.error('Error:', error))
  }

  // React.useEffect donne des instructions sur ce qu'on doit faire, lorsque quelque chose de nouveau se passe dans ton programme
  React.useEffect(() => {
    updateMeuble()
  })

  const [newCategorie, setCategorie] = React.useState('');
  function gererCategorieChoisie (categorieChoisie) {
    setCategorie(categorieChoisie);
  };

  const [newCouleur, setCouleur] = React.useState('');
  function gererCouleurChoisie (couleurChoisie) {
    setCouleur(couleurChoisie);
  };

  const [newMatiere, setMatiere] = React.useState('');
  function gererMatiereChoisie (matiereChoisie) {
    setMatiere(matiereChoisie);
  };

    function ajouterMeuble() {
    let meubleComplet=[]
    meubleComplet.push({nom : newNom})
    meubleComplet.push({categorie_id : newCategorie.id})
    meubleComplet.push({descriptif : newDescription})
    meubleComplet.push({prix : newPrix})
    meubleComplet.push({matiere_id: newMatiere.id})
    meubleComplet.push({photo : newPhoto})
    meubleComplet.push({couleur_id : newCouleur.id})
    meubleComplet.push({stock : newStock})
    meubleComplet.push({dimension : newDimension})
    meubleComplet.push({acheteur_id : null})
    meubleComplet.push({vendeur_id : null})
    console.log(meubleComplet)

    fetchAjoutMeuble(meubleComplet)
    .then(()=>{
      setCategorie("")
      setCouleur("")
      setDimension("")
      setMatiere("")
      setName("")
      setPhoto("")
      setPrix("")
      setStock("")
      setDescription("")
    })
    .then(()=>updateMeuble())
  }

  function supprimerMeuble(id){
    console.log("id",id)
    fetchSuppressionMeuble(id)
    .then(() =>  updateMeuble())
  }
  

     return (
<TableContainer>
  <Table variant='striped'>
    <TableCaption>inventaire</TableCaption>
    {/* nom des catégories */}
    <Thead>
      <Tr>
        <Th>nom</Th>
        <Th>photos</Th>
        <Th>catégorie</Th>
        <Th>description</Th>
        <Th>matière</Th>
        <Th>couleur</Th>
        <Th>dimension</Th>
        <Th>en stock</Th>
        <Th>acheteur</Th>
        <Th>prix en €</Th>
        </Tr>
    </Thead>
    {/* 1ère ligne du tableau avec insertion et menu déroulant pour créer un nouveau meuble dans la BDD */}
    <Tbody>
      <Tr>
        {/* insertion champ libre */}
      <Td><Input placeholder="Entrez un nom" value={newNom}
        onChange={nomChange}/></Td>
      <Td><Input placeholder="ajouter une photo" value={newPhoto}
        onChange={photoChange}/> </Td>
        {/* menu déroulant */}
        <Td><Menu>
          <MenuButton px={10}
                      py={4}
                      transition='all 0.2s'
                      borderRadius='md'
                      borderWidth='1px'
                      _hover={{ bg: 'white' }}>
                      {newCategorie.nom || 'Choisir la catégorie'}
          </MenuButton>
          <MenuList>
            {categories.map((categorie) => (
            <MenuItem key={categorie.id}  onClick={() => gererCategorieChoisie(categorie)}>
            {categorie.nom}
            </MenuItem>
        ))}
          </MenuList>
        </Menu></Td>
        <Td><Input placeholder="saisir une description" value={newDescription}
        onChange={DescriptionChange}/>  </Td>
          <Td><Menu>
          <MenuButton px={10}
                      py={4}
                      transition='all 0.2s'
                      borderRadius='md'
                      borderWidth='1px'
                      _hover={{ bg: 'white' }}>
                      {newMatiere.nom || 'Choisir la matière'}
          </MenuButton>
          <MenuList>
            {matieres.map((matiere) => (
            <MenuItem key={matiere.id}  onClick={() => gererMatiereChoisie(matiere)}>
            {matiere.nom}
          </MenuItem>
        ))}
          </MenuList>
        </Menu>
        </Td>
        <Td><Menu>
          <MenuButton px={10}
                      py={4}
                      transition='all 0.2s'
                      borderRadius='md'
                      borderWidth='1px'
                      _hover={{ bg: 'white' }}>
                      {newCouleur.nom || 'Choisir la couleur'}
          </MenuButton>
          <MenuList>
            {couleurs.map((couleur) => (
            <MenuItem key={couleur.id}  onClick={() => gererCouleurChoisie(couleur)}>
            {couleur.nom}
          </MenuItem>
        ))}
          </MenuList>
        </Menu>
        </Td>
        <Td><Input placeholder="ajouter une dimension" value={newDimension}
        onChange={dimensionChange}/> </Td>
        <Td><Input placeholder="en stock" value={newStock}
        onChange={stockChange}/></Td>
        <Td><Input placeholder="acheteur" /></Td>
        <Td><Input placeholder="saisir un prix" value={newPrix}
        onChange={prixChange}/></Td>
        {/* Bouton */}
        <Td><Button colorScheme='teal' variant='ghost' onClick={() =>ajouterMeuble()} > 
            ajouter</Button></Td>
        <Td></Td>
        </Tr>
          {meubles.map((meuble,index) => ( //boucle qui parcourt l'objet
            <Tr key={index}>
              <Td>{meuble.nom}</Td>          
              <Td>{meuble.photo}</Td>
              <Td>{meuble.categorie}</Td>
              <Td>{meuble.descriptif}</Td>
              <Td>{meuble.matiere}</Td>
              <Td>{meuble.couleur}</Td>
              <Td>{meuble.dimension}</Td>
              <Td>{meuble.stock}</Td>
              <Td>{meuble.acheteur_id}</Td>
              <Td>{meuble.prix}</Td>
             
              
              <Td> <Button colorScheme='teal' variant='ghost'>modifier</Button></Td>
              <Td> <Button colorScheme='teal' variant='ghost' onClick={() =>supprimerMeuble(meuble.id)}>supprimer</Button></Td>
             
            </Tr>
          ))}
   
    </Tbody>
    </Table>
    </TableContainer>
  );
}
 export default Admin;



