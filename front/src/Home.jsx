import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Card, CardBody } from '@chakra-ui/react';
import { Stack, Heading, Text, Image, Button, HStack } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react';

function Home() {
  const [meubles, setMeubles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    axios.get(`http://localhost:3000/?page=${page}`) 
      .then(response => {
        console.log(response.data);
        setMeubles(response.data);
      })
      .catch(error => {
        console.error('Error fetching meubles:', error);
      });
  
    // Calcul du nombre total de pages
    axios.get('http://localhost:3000/meublesCount')
      .then(response => {
        const totalMeubles = response.data.total;
        const pages = Math.ceil(totalMeubles / 6); // 6 meubles par page
        setTotalPages(pages);
      })
      .catch(error => {
        console.error('Error fetching total meubles count:', error);
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const goToPage = (pageNumber) => {
    setPage(pageNumber);
  };

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
      <HStack spacing="4" mt="4">
        <Button onClick={prevPage} disabled={page === 1}>Page précédente</Button>
        {/* Affichage des boutons de numéro de page */}
        {[...Array(totalPages)].map((_, index) => (
          <Button key={index} onClick={() => goToPage(index + 1)}>{index + 1}</Button>
        ))}
        <Button onClick={nextPage} disabled={page === totalPages}>Page suivante</Button>
      </HStack>
    </Stack>
  );
}

export default Home;