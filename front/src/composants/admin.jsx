import * as React from 'react';
// import fonctions tableau, bouton de la librairie chakra

import { fetchMeublesEnStock } from '../services/apiService';
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

//Import données meubles
let meubles= await fetchMeublesEnStock()
    .catch(error => console.error('Error:', error))

function Admin() {
  
  const categories = ['Catégorie 1', 'Catégorie 2', 'Catégorie 3'];
  const matières = ['mat 1', 'mat 2', 'mat 3'];
  console.log(meubles)
  typeof(meubles)

     return (
<TableContainer>
  <Table _css={{"table-layout":"fixed","width": '5%'}} variant='striped'>
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
          {meubles.map((meuble,index) => ( //boucle qui parcourt l'objet
            <Tr key={index}>
              <Td>{meuble.nom}</Td>          
              <Td>{meuble.photo}</Td>
              <Td>{meuble.categorie_id}</Td>
              <Td>{meuble.descriptif}</Td>
              <Td>{meuble.matiere_id}</Td>
              <Td>{meuble.couleur_id}</Td>
              <Td>{meuble.stock}</Td>
              <Td>{meuble.acheteur_id}</Td>
              <Td>{meuble.prix}</Td>
             
              
              <Td> <Button colorScheme='teal' variant='ghost'>ajouter</Button></Td>
              <Td> <Button colorScheme='teal' variant='ghost'>modifier</Button></Td>
              <Td> <Button colorScheme='teal' variant='ghost'>supprimer</Button></Td>
             
            </Tr>
          ))}
   
    </Tbody>
    </Table>
    </TableContainer>
  );
}
 export default Admin;



