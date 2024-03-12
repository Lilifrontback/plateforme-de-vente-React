// Todo : tester injection de données et voir modif restantes notamment visuelles
import React from "react";
import { useParams } from "react-router-dom";
import PhotoCard from "./composants/PhotoCard";
import TechnicalSheetCard from "./composants/TechnicalSheetCard";
import AddToCartButton from "./composants/AddToCartButton";
import { Grid, Box, HStack, GridItem, Text } from "@chakra-ui/react";

import { meubles } from "./Home";

function Product() {
  // Récupérer les paramètres d'URL, y compris l'ID
  let { id } = useParams();

  // On récupère le produit correspondant à l'ID
  const product = meubles.find((item) => item.id === parseInt(id));

  return (
    <Grid
      h="100%"
      w="100%"
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
      mt="3%"
      mb="4%"
    >
      <GridItem colSpan={1}></GridItem>

      <GridItem rowSpan={3} colSpan={1}>
        <HStack>
          <Box>
            <PhotoCard image={product.photo} />
          </Box>
        </HStack>
      </GridItem>

      <GridItem colSpan={2}>
        <HStack>
          <Box>
            <TechnicalSheetCard product={product} />
          </Box>
        </HStack>
      </GridItem>

      <GridItem colSpan={2} mt={2}>
        <Text>{product.descriptif} </Text>
      </GridItem>

      <GridItem colSpan={2} mt={2}>
        <AddToCartButton product={product} />
      </GridItem>

      <GridItem colSpan={1}></GridItem>
    </Grid>
  );
}

export default Product;
