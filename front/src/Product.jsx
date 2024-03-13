// Todo : tester injection de données et voir modif restantes notamment visuelles
import React from "react";
import { useParams } from "react-router-dom";
import PhotoCard from "./composants/PhotoCard";
import TechnicalSheetCard from "./composants/TechnicalSheetCard";
import AddToCartButton from "./composants/AddToCartButton";
import { Grid, Box, HStack, GridItem, Text } from "@chakra-ui/react";
import {fetchMeubles} from "./services/apiService";

//Import données 
const meubles = await fetchMeubles().catch((error) =>
  console.error("Error:", error)
);

function Product() {
  window.scrollTo({ top:0, behavior:'smooth'})
  // Récupérer les paramètres d'URL, y compris l'ID
  let { id } = useParams();

  // On récupère le produit correspondant à l'ID
  const product = meubles.find((item) => item.id === parseInt(id));

  return (
    
    <Box backgroundImage="url('../src/assets/images/pattern_flower.png')">
    <Grid
      h="100%"
      w="100%"
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gridTemplateRows={"min-content"}
      gap={4}
      mb="4%"
      
    >
      <GridItem colSpan={1}></GridItem>

      <GridItem rowSpan={3} colSpan={1}>
        <HStack>
          <Box mt="25px" >
            <PhotoCard image={product.photo}  />
          </Box>
        </HStack>
      </GridItem>

      <GridItem colSpan={2}>
        <HStack>
          <Box mt="25px">
            <TechnicalSheetCard product={product} />
          </Box>
        </HStack>
      </GridItem>

      <GridItem bg='#254356' color="white" colSpan={2} p={4} borderRadius="md"  >
        <Text fontWeight="bold" mb={2}>Description :</Text>
        <Text>{product.descriptif} </Text>
      </GridItem>

      <GridItem colSpan={2} mb={10}> 
      {/* mt={2} */}
        <AddToCartButton product={product} />
      </GridItem>

      <GridItem colSpan={1}></GridItem>
    </Grid>
    </Box>
  );
  
}

export default Product;
