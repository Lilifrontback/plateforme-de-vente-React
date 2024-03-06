import * as React from 'react';
// import ListGroup from 'react-bootstrap/ListGroup';
// import Button from 'react-bootstrap/Button';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
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


function HorizontalResponsiveExample() {
     return (
<TableContainer>
  <Table variant='simple'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
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
<Stack direction='row' spacing={4} align='center'>
    <Button colorScheme='teal' variant='ghost'>
    ajouter
    </Button>
    <Button colorScheme='teal' variant='ghost'>
    modifier
  </Button>
  <Button colorScheme='teal' variant='ghost'>
    supprimer
  </Button>
</Stack>  
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
      <Td><Input placeholder="Entrez un nom" /></Td>
      <Td><Input placeholder="ajouter une photo" /></Td>
      <Td><Input placeholder="choisir une catégorie" /></Td>
      <Td><Input placeholder="saisir une description" /></Td>
      <Td><Input placeholder="choisir une matière" /></Td>
      <Td><Input placeholder="saisir/choisir une couleur" /></Td>
      <Td><Input placeholder="en stock" /></Td>
      <Td><Input placeholder="acheteur" /></Td>
      <Td><Input placeholder="saisir un prix" /></Td>
       
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
    </Tbody>
    </Table>
    </TableContainer>
  );
}
 export default HorizontalResponsiveExample;




//  function HorizontalResponsiveExample() {
//   return (
//     <>
//       {['sm', 'md', 'lg', 'xl', 'xxl'].map((breakpoint) => (
//         <ListGroup key={breakpoint} horizontal={breakpoint} className="my-2">
//           <ListGroup.Item>nom</ListGroup.Item>
//           <ListGroup.Item>photos</ListGroup.Item>
//           <ListGroup.Item>catégorie</ListGroup.Item>
//           <ListGroup.Item>description</ListGroup.Item>
//           <ListGroup.Item>matière</ListGroup.Item>
//           <ListGroup.Item>couleur</ListGroup.Item>
//           <ListGroup.Item>en stock</ListGroup.Item>
//           <ListGroup.Item>acheteur</ListGroup.Item>
//           <ListGroup.Item>prix</ListGroup.Item>
//         </ListGroup>
//       ))}
//     </>
//   );
// }
// export default HorizontalResponsiveExample;


// function BasicExample() {
//   return (
//     <ButtonGroup aria-label="Basic example">
//       <Button variant="secondary">ajouter</Button>
//       <Button variant="secondary">modifier</Button>
//       <Button variant="secondary">supprimer</Button>
//     </ButtonGroup>
//   );
// }
// export { HorizontalResponsiveExample, BasicExample };



{/* <ul class="list-group">
  <li class="list-group-item active" aria-current="true">nom</li>
  <li class="list-group-item">photos</li>
  <li class="list-group-item">catégorie</li>
  <li class="list-group-item">description</li>
  <li class="list-group-item">matière</li>
  <li class="list-group-item">couleur</li>
  <li class="list-group-item">en stock</li>
  <li class="list-group-item">acheteur</li>
  <li class="list-group-item">prix</li>
</ul> */}

{/* <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary">ajouter</button>
  <button type="button" class="btn btn-primary">modifier</button>
  <button type="button" class="btn btn-primary">supprimer</button>
</div> */}