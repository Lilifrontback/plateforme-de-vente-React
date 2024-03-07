import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { Card, CardBody, CardFooter, Box } from '@chakra-ui/react';
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
function Home() {
    return (
      <SimpleGrid spacing={4} templateColumns='repeat(3,1fr)' justifyItems='center' alignItems='center'>
        {meuble.map(meuble => (
          <Card key={meuble.id} maxW='xs'>
            <CardBody>
              <Image src={meuble.image} alt={meuble.nom} borderRadius='lg' />
              <Stack mt='6' spacing='3'>
                {/* Inclure l'ID de l'article dans l'URL */}
                <Link to={`/product/${meuble.id}`}>
                  <Heading size='md'>{meuble.nom}</Heading>
                </Link>
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
            <CardBody>
              <Button variant='solid' colorScheme='blue'>
                Ajouter au panier
              </Button>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    );
  }
  
  export default Home;