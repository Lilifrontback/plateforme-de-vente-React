import React from "react";
import SearchBar from "../src/composants/SearchBar.jsx";
import Filtres from "../src/composants/Filters.jsx";
import { Link } from "react-router-dom";
import { Card, CardBody } from "@chakra-ui/react";
import { Stack, Heading, Text, Image, Button } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";

//Import données
import { fetchMeubles } from "./services/apiService.jsx";
// import { fetchMeublesFiltres } from "./services/apiService.jsx";

// On export la constante pour la récupérer dans d'autres pages
export const meubles = await fetchMeubles().catch((error) =>
  console.error("Error:", error)
);

function Home() {
  const filtreParCategorie = ["Chaise", "Table", "Lit"];
  const selectionFiltre = (filtreChoisi) => {
    // Filtrer les meubles en fonction du filtre sélectionné
    const meublesFiltrés = meubles.filter(
      (meuble) => meuble.categorie === filtreChoisi
    );
    setFilteredMeubles(meublesFiltrés);
    console.log(`Filtre sélctionné: ${filtreChoisi}`);
  };
  return (
    <Stack spacing={8} align="center" mt={8}>
      <div>
        <Filtres
          filters={filtreParCategorie}
          onSelectFilter={selectionFiltre}
        />
        {/* Render your data based on the selected filter */}
      </div>
      <SearchBar />
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(3,1fr)"
        justifyItems="center"
      >
        {meubles.map((meuble) => (
          <Card key={meuble.id} maxW="xs">
            <CardBody>
              <Image
                src={meuble.photo}
                alt={meuble.nom}
                borderRadius="lg"
                boxSize="300px"
                objectFit="cover"
              />
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
              <Link to={`/basket/${meuble.id}`}>
                <Button variant="solid" colorScheme="blue">
                  {/*Appeller le composant Bouton et linkto ajout panier*/}
                  Ajouter au panier
                </Button>
              </Link>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Stack>
  );
}

export default Home;
