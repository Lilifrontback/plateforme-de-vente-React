import * as React from 'react';
import { Card, CardBody, CardFooter } from '@chakra-ui/react'
import { Stack, Heading, Text, Image, Button } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react';

// Exemple pour rendre la page dynamique.
//@todo: A remplacer par un appel API pour récupérer les articles.

const meuble = [
  {
      id: 1,
      nom: "Canapé",
      prix: 149.99,
      image: "../src/assets/images/canape_gris.jpg",
  },
  {
      id: 2,
      nom: "Armoire",
      prix: 119.99,
      image: "../src/assets/images/armoire.jpg",
  },
  {
      id: 3,
      nom: "Commode",
      prix: 69.99,
      image: "../src/assets/images/commode.jpg",
  },
  {
      id: 4,
      nom: "Bibliothèque",
      prix: 99.99,
      image: "../src/assets/images/biblio.jpg",
  },
  {
      id: 5,
      nom: "Canapé",
      prix: 179.99,
      image: "../src/assets/images/canape_panacota.jpg",
  },
  {
      id: 6,
      nom: "Chaises",
      prix: 39.99,
      image: "../src/assets/images/chaises.jpg",
  },

];


/**
 * Rendu de la page d'accueil - cartes appelées dynamiquement avec la fonction map.
 * @todo: limiter le nombre de carte affichées.
 * @returns 6 Cards (photo, titre, prix, petite description et bouton "ajouter au panier") -- puisque 6 objets dans la constante-exemple 'meuble'.
 */
function HomePage() {
    return (
        <SimpleGrid spacing={4} templateColumns='repeat(3,1fr)' display='flex' flexWrap='wrap'>
          {meuble.map(meuble => (
          <Card key={meuble.id} maxW='sm'>
          <CardBody>
            <Image
              src={meuble.image}
              alt={meuble.nom}
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>{meuble.nom}</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque inspired
                spaces, earthy toned spaces and for people who love a chic design with a
                sprinkle of vintage design.
              </Text>
              <Text color='blue.600' fontSize='2xl' ml='auto'>
                {meuble.prix}€
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter justifyContent='right'>
            <Button variant='solid' colorScheme='blue'>
              Ajouter au panier
            </Button>
          </CardFooter>
          </Card>
          ))}
        </SimpleGrid>
    );
  }
   
export default HomePage;