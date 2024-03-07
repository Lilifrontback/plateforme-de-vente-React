import * as React from 'react';
// import fonctions tableau, bouton de la librairie chakra
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
  Input
} from '@chakra-ui/react';


function Admin() {
  const exemples = [
    {
      nom: "canapé fantastique",
      photos: "photo",
      catégorie: "canapé",
      description: "canap de compet",
      matière: "cuir",
      couleur: "noir",
      enstock: "true",
      acheteur: "acheteur",
      prix: "100"
    },
    {
      nom: "table élégante",
      photos: "photo2",
      catégorie: "table",
      description: "table design",
      matière: "bois",
      couleur: "blanc",
      enstock: "true",
      acheteur: "acheteur2",
      prix: "150"
    }
  ];
  const categories = ['Catégorie 1', 'Catégorie 2', 'Catégorie 3'];
  const matières = ['mat 1', 'mat 2', 'mat 3'];

  //en prévision pour rajouter un nouveau meuble dans la BDD par l'API à vérifier si fonctionnel
  // const handleAddItem = () => {
  //  Envoyer les données à l'API
  //   fetch('https://api-url/endpoint', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(formData),
  //   })
  //   .then(response => response.json())
  //   .catch(error => {
  //     console.error('Erreur lors de l\'ajout des données:', error);
  //   });
  // };


     return (
<TableContainer>
  <Table variant='simple'>
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
        <Th>en stock</Th>
        <Th>acheteur</Th>
        <Th>prix</Th>
        <Th>ajouter</Th>
        <Th>modifier</Th>
        <Th>supprimer</Th>
        </Tr>
    </Thead>
    {/* 1ère ligne du tableau avec insertion et menu déroulant pour créer un nouveau meuble dans la BDD */}
    <Tbody>
      <Tr>
        {/* insertion champ libre */}
      <Td><Input placeholder="Entrez un nom" /></Td>
      <Td><Input placeholder="ajouter une photo" /></Td>
      {/* menu déroulant */}
      <Td><select><option value="">catégorie</option>
      {categories.map((categorie, index) => (
      <option key={index} value={categorie}>{categorie}</option>
       ))}
      </select></Td>
      <Td><Input placeholder="saisir une description" /></Td>
         <Td><select><option value="">matière</option>
      {matières.map((matières, index) => (
      <option key={index} value={matières}>{matières}</option>
      ))}
       </select></Td>
      <Td><Input placeholder="saisir/choisir une couleur" /></Td>
      <Td><Input placeholder="en stock" /></Td>
      <Td><Input placeholder="acheteur" /></Td>
      <Td><Input placeholder="saisir un prix" /></Td>
      {/* Bouton */}
      <Td><Button colorScheme='teal' variant='ghost'> 
      {/* onClick={handleAddItem} à rajouter au bouton*/}
    ajouter</Button></Td>  
      </Tr>

          {exemples.map((exemple, index) => ( //boucle qui parcourt l'objet
            <Tr key={index}>
              <Td>{exemple.nom}</Td>          
              <Td>{exemple.photos}</Td>
              <Td>{exemple.catégorie}</Td>
              <Td>{exemple.description}</Td>
              <Td>{exemple.matière}</Td>
              <Td>{exemple.couleur}</Td>
              <Td>{exemple.enstock}</Td>
              <Td>{exemple.acheteur}</Td>
              <Td>{exemple.prix}</Td>
              
              <Td> <Button colorScheme='teal' variant='ghost'>ajouter</Button></Td>
              <Td><Button colorScheme='teal' variant='ghost'>modifier</Button></Td>
              <Td> <Button colorScheme='teal' variant='ghost'>supprimer</Button></Td>
             
            </Tr>
          ))}
   
    </Tbody>
    </Table>
    </TableContainer>
  );
}
 export default Admin;



