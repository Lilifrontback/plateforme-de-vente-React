import * as React from 'react';
import './Home.css'; 
import { Card, CardBody, CardFooter } from '@chakra-ui/react'
import { Stack, Heading, Text, Image, Button } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react';

// Exemple d'ajout d'articles en dur:

/* const meuble = [
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

]; */


/**
 * Fonction de création de 6 Cards avec Chakra.UI (en dur).
 * TO DO: faire une boucle pour afficher chaque article en base de données, ne faire qu'une Card au lieu de 6.
 * @returns 6 Cards (photo, titre, prix, petite description et bouton "ajouter au panier")
 */
function HomePage() {
  return (
      <SimpleGrid spacing={4} templateColumns='repeat(3,1fr)' display='flex' flexWrap='wrap'>
        <Card maxW='sm'>
        <CardBody>
          <Image
            src='../src/assets/images/canape_gris.jpg'
            alt='Canapé gris'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'><a>Living room Sofa</a></Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design with a
              sprinkle of vintage design.
            </Text>
            <Text color='blue.600' fontSize='2xl' ml='auto'>
              $450
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

        <Card maxW='sm'>
          <CardBody>
            <Image
              src='../src/assets/images/armoire.jpg'
              alt='Armoire'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'><a>Living room Sofa</a></Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque inspired
                spaces, earthy toned spaces and for people who love a chic design with a
                sprinkle of vintage design.
              </Text>
              <Text color='blue.600' fontSize='2xl' ml='auto'>
                $450
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

        <Card maxW='sm'>
          <CardBody>
            <Image
              src='../src/assets/images/commode.jpg'
              alt='Commode'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'><a>Living room Sofa</a></Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque inspired
                spaces, earthy toned spaces and for people who love a chic design with a
                sprinkle of vintage design.
              </Text>
              <Text color='blue.600' fontSize='2xl' ml='auto'>
                $450
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

        <Card maxW='sm'>
          <CardBody>
            <Image
              src='../src/assets/images/biblio.jpg'
              alt='Bibliothèque'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'><a>Living room Sofa</a></Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque inspired
                spaces, earthy toned spaces and for people who love a chic design with a
                sprinkle of vintage design.
              </Text>
              <Text color='blue.600' fontSize='2xl' ml='auto'>
                $450
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

        <Card maxW='sm'>
          <CardBody>
            <Image
              src='../src/assets/images/chaises.jpg'
              alt='Chaise'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'><a>Living room Sofa</a></Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque inspired
                spaces, earthy toned spaces and for people who love a chic design with a
                sprinkle of vintage design.
              </Text>
              <Text color='blue.600' fontSize='2xl' ml='auto'>
                $450
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

        <Card maxW='sm'>
          <CardBody>
            <Image
              src='../src/assets/images/canape_panacota.jpg'
              alt='Canapé panacota'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'><a>Living room Sofa</a></Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque inspired
                spaces, earthy toned spaces and for people who love a chic design with a
                sprinkle of vintage design.
              </Text>
              <Text color='blue.600' fontSize='2xl' ml='auto'>
                $450
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

      </SimpleGrid>
  );
}

export default HomePage;