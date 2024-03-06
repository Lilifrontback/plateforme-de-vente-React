import * as React from 'react';
import './Home.css'; 
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Stack, Heading, Text, Image, Button } from '@chakra-ui/react';
import { Divider, ButtonGroup } from '@chakra-ui/react';

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

function HomePage() {
    return (
        <Card maxW='sm'>
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
    );
}

export default HomePage;