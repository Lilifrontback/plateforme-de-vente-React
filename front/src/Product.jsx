import React from 'react';
import { useParams } from 'react-router-dom';
import PhotoCard from './composants/PhotoCard';
import DescriptionCard from './composants/DescriptionCard';
import TechnicalSheetCard from './composants/TechnicalSheetCard';
import AddToCartButton from './composants/AddToCartButton';
import { Grid, Container, Flex } from '@chakra-ui/react';

import { meuble } from './Home'

function Product() {
    // Récupérer les paramètres d'URL, y compris l'ID
    let { id } = useParams();

    // On récupère le produit correspondant à l'ID
    const product = meuble.find(item => item.id === parseInt(id));

    return (
        <Grid>
            <Container>
                <Flex>
                    <PhotoCard image={product.image} />
                    <TechnicalSheetCard product={product} />
                </Flex>
            </Container>

            <Container mt={4}>
                <DescriptionCard description={product.description} />
            </Container>

            <Container mt={4}>
                <AddToCartButton product={product} />
            </Container>
        </Grid>
    );
}

export default Product;