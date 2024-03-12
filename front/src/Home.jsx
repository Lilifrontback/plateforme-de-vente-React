import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../src/composants/SearchBar.jsx'
import { Link } from "react-router-dom";
import { Card, CardBody } from '@chakra-ui/react';
import { Stack, Heading, Text, Image, Button } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react';

// On export la constante pour la récupérer dans d'autres pages
// export const meuble = [
//   {
//       id: 1,
//       nom: "Canapé",
//       prix: 149.99,
//       image: "../src/assets/images/canape_gris.jpg",
//   },
//   {
//       id: 2,
//       nom: "Armoire",
//       prix: 119.99,
//       image: "../src/assets/images/armoire.jpg",
//   },
//   {
//       id: 3,
//       nom: "Commode",
//       prix: 69.99,
//       image: "../src/assets/images/commode.jpg",
//   },
//   {
//       id: 4,
//       nom: "Bibliothèque",
//       prix: 99.99,
//       image: "../src/assets/images/biblio.jpg",
//   },
//   {
//       id: 5,
//       nom: "Canapé",
//       prix: 179.99,
//       image: "../src/assets/images/canape_panacota.jpg",
//   },
//   {
//       id: 6,
//       nom: "Chaises",
//       prix: 39.99,
//       image: "../src/assets/images/chaises.jpg",
//   }
// ];

function Home() {
  const [meubles, setMeubles] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:3000/') // endpoint approprié pour récupérer les 6 derniers meubles
          .then(response => {
            console.log(response.data);
              setMeubles(response.data);
          })
          .catch(error => {
              console.error('Error fetching meubles:', error);
          });
  }, []);

  return (
      <Stack spacing={8} align="center" mt={8}>
          <SimpleGrid spacing={4} templateColumns='repeat(3,1fr)' justifyItems='center'>
              {meubles.map(meuble => (
                  <Card key={meuble.id} maxW='xs'>
                      <CardBody>
                          <Image src={meuble.photo} alt={meuble.nom} borderRadius='lg' boxSize="300px" objectFit="cover" />
                          <Stack mt='6' spacing='3'>
                              <Link to={`/product/${meuble.id}`}>
                                  <Heading size='md'>{meuble.nom}</Heading>
                              </Link>
                              <Text>{meuble.descriptif}</Text>
                              <Text color='blue.600' fontSize='2xl' ml='auto'>
                                  {meuble.prix}€
                              </Text>
                          </Stack>
                      </CardBody>
                      <Divider />
                      <CardBody>
                          <Button variant='solid' colorScheme='blue'>
                              Ajouter au panier
                          </Button>
                      </CardBody>
                  </Card>
              ))}
          </SimpleGrid>
      </Stack>
  );
}

export default Home;