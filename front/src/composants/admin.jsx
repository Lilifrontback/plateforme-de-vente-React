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
  Input,
} from '@chakra-ui/react';

//Import données meubles
let meubles= await fetchMeublesEnStock()
    .catch(error => console.error('Error:', error))
    
    
function Admin() {
  const [nomMeuble, setName] = React.useState('');
  const [newDescription, setValue] = React.useState('');
  const [newPhoto, setPhoto] = React.useState('');
  const [newPrix, setPrix] = React.useState('');
  const [newStock, setStock] = React.useState('');
  const handleChange = (event) => setName(event.target.value)
  const DescriptionChange = (event) => setValue(event.target.value)
  const photoChange = (event) => setPhoto(event.target.value)
  const prixChange = (event) => setPrix(event.target.value)
  const stockChange = (event) => setStock(event.target.value)
  const categories = ['Canape', 'Catégorie 2', 'Catégorie 3'];
  const matières = ['mat 1', 'mat 2', 'mat 3'];
  console.log(meubles)
  typeof(meubles)

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
      <Td><Input placeholder="Entrez un nom" value={nomMeuble}
        onChange={handleChange}/> 
        {console.log(nomMeuble)}  </Td>
      <Td><Input placeholder="ajouter une photo" value={newPhoto}
        onChange={photoChange}/> </Td>
        {/* menu déroulant */}
        <Td><select><option value="">catégorie</option>
        {categories.map((categorie, index) => (
        <option key={index} value={categorie}>{categorie}</option>
        ))}
        </select></Td>
        <Td><Input placeholder="saisir une description" value={newDescription}
        onChange={DescriptionChange}/> {console.log(newDescription)} </Td>
          <Td><select><option value="">matière</option>
        {matières.map((matières, index) => (
        <option key={index} value={matières}>{matières}</option>
        ))}
        </select></Td>
        <Td><Input placeholder="saisir/choisir une couleur" /></Td>
        <Td><Input placeholder="en stock" value={newStock}
        onChange={stockChange}/></Td>
        <Td><Input placeholder="acheteur" /></Td>
        <Td><Input placeholder="saisir un prix" value={newPrix}
        onChange={prixChange}/></Td>
        {/* Bouton */}
        <Td><Button colorScheme='teal' variant='ghost'  > 
        {/* onClick={handleAddItem} */}
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
             
              <Td> XXXXX </Td>
              
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



