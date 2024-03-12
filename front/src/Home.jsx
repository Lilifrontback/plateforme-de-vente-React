import React from "react";
import SearchBar from "../src/composants/SearchBar.jsx";
import { Link } from "react-router-dom";
import { Card, CardBody } from "@chakra-ui/react";
import { Stack, Heading, Text, Image, Button } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";

//Import données meubles
import {fetchMeubles} from "./services/apiService.jsx";

// On export la constante pour la récupérer dans d'autres pages
export const meubles = await fetchMeubles().catch((error) =>
  console.error("Error:", error)
);

function Home() {
  return (
    <Stack spacing={8} align="center" mt={8}>
      <SearchBar />
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(3,1fr)"
        justifyItems="center"
      >
        {meubles.map((meuble) => (
          <Card key={meuble.id} maxW="xs">
            <CardBody>
              <Image src={meuble.photo} alt={meuble.nom} borderRadius="lg" />
              <Stack mt="6" spacing="3">
                {/* Inclure l'ID de l'article dans l'URL */}
                <Link to={`/product/${meuble.id}`}>
                  <Heading size="md">{meuble.nom}</Heading>
                </Link>
                <Text>
                  {/*Description à rendre dynamique avec les données*/}
                  {meuble.descriptif}
                </Text>
                <Text color="blue.600" fontSize="2xl" ml="auto">
                  {meuble.prix}€
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardBody>
              <Button variant="solid" colorScheme="blue">
                {/*Appeller le composant Bouton et linkto ajout panier*/}
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
