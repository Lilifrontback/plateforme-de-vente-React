import React, { useState } from 'react';
import SearchBar from "../src/composants/SearchBar.jsx";
import Filtres from "../src/composants/Filters.jsx";
import { Link } from "react-router-dom";
import { Card, CardBody } from "@chakra-ui/react";
import { Stack, Heading, Text, Image, Button } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";

//Import services
import {fetchMeubles} from "./services/apiService.jsx";
import { fetchMeublesFiltres } from './services/apiService.jsx';


// On crée la constante meubles sur laquelle itérer. Par défaut (si non filtré) elle correspond au fetch global
const meubles = await fetchMeubles().catch((error) =>
console.error("Error:", error)
);


//On met des useState pour écouter quel filtre est sélectionné
function Home() {
  const [selectedCategorieFilter, setSelectedCategorieFilter] = useState(null);
  const [selectedCouleurFilter, setSelectedCouleurFilter] = useState(null);
  const [selectedMatiereFilter, setSelectedMatiereFilter] = useState(null);

//On choisit les listes de filtres. Ces listes doivent correspondre à la BDD 
  const filtreParCouleur = ['Chêne clair','Vert','bleu nuit', 'Beige', 'Rouge', 'Doré', 'Chêne foncé', 'Gris', 'Acajou', 'Noir']
  const filtreParCategorie = ['Chaise', 'Table', 'Lit', 'Canapé', 'Fauteuil', 'Cathèdre', 'Vaisselier', 'Armoire', 'Dressoir', 'Cabinet', 'Commode'];
  const filtreParMatiere = ['Bois', 'Cuir', 'Velour', 'Verre', 'Plastique', 'Pierre', 'Rotin', 'Tissu'];

//On place un useState pour écouter la liste de meubles filtrés qui sera mise à jour selon filtres appliqués
  const [filteredMeubles, setFilteredMeubles] = useState(meubles);
  
//Filtrer les meubles en fonction du filtre sélectionné (ex : chaises), et d'une propriété (ex:categorie)
//La fonction est appellée dans le template

  async function selectionFiltre (filtreChoisi,propriete) {

  //Selon la propriété (categorie, couleur ou matière) avec laquelle selectionFiltre est appellée, on va mettre à  jour dans le useState le filtre sélectionné
    switch (propriete) {
      case 'categorie':
        setSelectedCategorieFilter(filtreChoisi === 'Aucun' ? null : filtreChoisi);
        break;
      case 'couleur':
        setSelectedCouleurFilter(filtreChoisi === 'Aucun' ? null : filtreChoisi);
        break;
      case 'matiere':
        setSelectedMatiereFilter(filtreChoisi === 'Aucun' ? null : filtreChoisi);
        break;
      default:
        break;
    }
      let filterParam;
      let valueParam = filtreChoisi.toLowerCase()

      if (propriete === 'categorie') filterParam = 'categorie';
      if (propriete === 'couleur') filterParam = 'couleur';
      if (propriete === 'matiere') filterParam = 'matiere';
      console.log("ceci a été retenu comme filtre", filterParam)
      console.log("ceci a été retenu comme valeur", valueParam)
      let meublesFiltres
      if (valueParam === 'aucun'){
        console.log('La valeur est bien Aucun')
        meublesFiltres = await fetchMeubles().catch((error) =>
        console.error("Error:", error)
        );
      
      } else {
        meublesFiltres = await fetchMeublesFiltres(filterParam,valueParam).catch((error) =>
        console.error("Error:", error)
        );
      }
      
  //Selon la valeur prise par meublesFiltres dans la condition, on change la valeur de FilterMeubles  et de SelectedFilter dans le useState
  setFilteredMeubles(meublesFiltres);

  // setSelectedFilter(filtreChoisi);
  console.log(`Filtre sélectionné: ${filtreChoisi}`);
  console.log(`Meubles filtrés: ${meublesFiltres}`)
  }  

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

