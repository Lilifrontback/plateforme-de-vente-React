import React, { useState } from 'react';
import SearchBar from "../src/composants/SearchBar.jsx";
import Filtres from "../src/composants/Filters.jsx";
import { Link } from "react-router-dom";
import { Card, CardBody } from "@chakra-ui/react";
import { Stack, Heading, Text, Image, Button } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";

//Import données 
import {fetchMeubles} from "./services/apiService.jsx";

// On export la constante pour la récupérer dans d'autres pages
export const meubles = await fetchMeubles().catch((error) =>
  console.error("Error:", error)
);

function Home() {
  const filtreParCouleur = ['Chêne clair','Vert','bleu nuit', 'Beige', 'Rouge', 'Doré', 'Chêne foncé', 'Gris', 'Acajou', 'Noir']
  const filtreParCategorie = ['Chaise', 'Table', 'Lit', 'Canapé', 'Fauteuil', 'Cathèdre', 'Vaisselier', 'Armoire', 'Dressoir', 'Cabinet', 'Commode'];
  const filtreParMatiere = ['Bois', 'Cuir', 'Velour', 'Verre', 'Plastique', 'Pierre', 'Rotin', 'Tissu'];

//On garde en mémoire
  const [filteredMeubles, setFilteredMeubles] = useState(meubles);

// Filtrer les meubles en fonction du filtre sélectionné, et d'une propriété qu'on veut chercher pour comparer au filtre (on appelle le paramètre filtreChoisi)
  function selectionFiltre (filtreChoisi,propriete) {
    const meublesFiltrés = meubles.filter(function (meuble) {
      return meuble[propriete] === filtreChoisi;
  });
  //On change la valeur de FilterMeubles dans le useState
  setFilteredMeubles(meublesFiltrés);
    console.log(`Filtre sélectionné: ${filtreChoisi}`);
  };
  return (
    <Stack spacing={8} align="center" mt={8}>
      <div>
      <Filtres filters={filtreParCategorie} onSelectFilter={(filtreChoisi) => selectionFiltre(filtreChoisi, "categorie")} />
      <Filtres filters={filtreParCouleur} onSelectFilter={(filtreChoisi) => selectionFiltre(filtreChoisi, "couleur")} />
      <Filtres filters={filtreParMatiere} onSelectFilter={(filtreChoisi) => selectionFiltre(filtreChoisi, "matiere")} />
    </div>
    <SearchBar />
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(3,1fr)"
        justifyItems="center"
      >
        {filteredMeubles.map((meuble) => (
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

