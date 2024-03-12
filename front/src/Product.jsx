// Todo : tester injection de données et voir modif restantes notamment visuelles
import React from 'react';
import { useParams } from 'react-router-dom';
import PhotoCard from './composants/PhotoCard';
import DescriptionCard from './composants/DescriptionCard';
import TechnicalSheetCard from './composants/TechnicalSheetCard';
import AddToCartButton from './composants/AddToCartButton';
import { Grid, Box, HStack, GridItem } from '@chakra-ui/react';

// import { meuble } from './Home'

function Product() {
    // Récupérer les paramètres d'URL, y compris l'ID
    let { id } = useParams();

    // On récupère le produit correspondant à l'ID
    const product = meuble.find(item => item.id === parseInt(id));

    return (
        
        <Grid
            h='100%'
            w='100%'
            templateRows='repeat(3, 1fr)'
            templateColumns='repeat(5, 1fr)'
            gap={4} 
            mt='3%'
            mb='4%'
        >
            <GridItem colSpan={1}>
                
            </GridItem>

            <GridItem rowSpan={3} colSpan={1}>
                <HStack>
                    <Box><PhotoCard image={product.image} /></Box>
                </HStack>
            </GridItem>

            <GridItem colSpan={2}>
                <HStack>
                    <Box><TechnicalSheetCard product={product} /></Box>
                </HStack>
            </GridItem>

            <GridItem colSpan={2} mt={2}>
                <DescriptionCard description={product.description} />
            </GridItem>

            <GridItem colSpan={2} mt={2}>
                <AddToCartButton product={product} />
            </GridItem>

            <GridItem colSpan={1}>
                
            </GridItem>
        </Grid>


        
    );
}

export default Product;