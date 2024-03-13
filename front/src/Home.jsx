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
import { fetchMeublesFiltres } from './services/apiService.jsx';


// On crée les constantes meubles et meubles filtrés sur lesquelle itérer
const meubles = await fetchMeubles().catch((error) =>
  console.error("Error:", error)
);

const meublesParCouleur = fetchMeublesFiltres()
//On met des useState pour écouter quel filtre est sélectionné
function Home() {
  const [selectedCategorieFilter, setSelectedCategorieFilter] = useState(null);
  const [selectedCouleurFilter, setSelectedCouleurFilter] = useState(null);
  const [selectedMatiereFilter, setSelectedMatiereFilter] = useState(null);

//On choisit les listes de filtres
  const filtreParCouleur = ['Chêne clair','Vert','bleu nuit', 'Beige', 'Rouge', 'Doré', 'Chêne foncé', 'Gris', 'Acajou', 'Noir']
  const filtreParCategorie = ['Chaise', 'Table', 'Lit', 'Canapé', 'Fauteuil', 'Cathèdre', 'Vaisselier', 'Armoire', 'Dressoir', 'Cabinet', 'Commode'];
  const filtreParMatiere = ['Bois', 'Cuir', 'Velour', 'Verre', 'Plastique', 'Pierre', 'Rotin', 'Tissu'];

//On place un useState pour les meubles filtrés qui seront mis à jour selon filtres appliqués
  const [filteredMeubles, setFilteredMeubles] = useState(meubles);
  
// Filtrer les meubles en fonction du filtre sélectionné, et d'une propriété 
//qu'on veut chercher pour la comparer au filtre sélectionné (on appelle le paramètre filtreChoisi)

  function selectionFiltre (filtreChoisi,propriete) {
  //Selon la propriété avec laquelle selectionFiltre est appellée, on va mettre à  jour dans le useState SelectedCategorieFilter 
    switch (propriete) {
      case 'categorie':
        setSelectedCategorieFilter(filtreChoisi);
        break;
      case 'couleur':
        setSelectedCouleurFilter(filtreChoisi);
        break;
      case 'matiere':
        setSelectedMatiereFilter(filtreChoisi);
        break;
      default:
        break;
    }
  //On filtre les meubles pour retourner ceux dont la propriété est celle du filtre choisi
  //Si le filtre choisi est Aucun, on ne va pas les filtrer et ainsi revenir à tous les meubles (défiltrage)
    const meublesFiltrés = meubles.filter(function (meuble) {
      return meuble[propriete] === filtreChoisi || filtreChoisi === 'Aucun';
  });
  
  //On change la valeur de FilterMeubles dans le useState
  setFilteredMeubles(meublesFiltrés);
  setSelectedFilter(filtreChoisi);
    console.log(`Filtre sélectionné: ${filtreChoisi}`);
  };
  return (
    <Stack spacing={8} align="center" mt={8}>
      <div>
      <Filtres filters={filtreParCategorie} onSelectFilter={(filtreChoisi) => selectionFiltre(filtreChoisi, "categorie")}  selectedFilter={selectedCategorieFilter}  filterType="categorie"  />
      <Filtres filters={filtreParCouleur} onSelectFilter={(filtreChoisi) => selectionFiltre(filtreChoisi, "couleur")} selectedFilter={selectedCouleurFilter}  filterType="couleur"/>
      <Filtres filters={filtreParMatiere} onSelectFilter={(filtreChoisi) => selectionFiltre(filtreChoisi, "matiere")}selectedFilter={selectedMatiereFilter} filterType="matiere" />
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
              <Image src={meuble.photo} alt={meuble.nom} borderRadius='lg' boxSize="300px" objectFit="cover" />
              <Stack mt="6" spacing="3">
                <Link to={`/product/${meuble.id}`}>
                  <Heading size="md">{meuble.nom}</Heading>
                </Link>
                <Text>
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

