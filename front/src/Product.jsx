import React from 'react';
import { useParams } from 'react-router-dom';
import { SimpleGrid, Grid, Container } from '@chakra-ui/react';
import PhotoCard from './composants/PhotoCard.jsx';
import DescriptionCard from './composants/DescriptionCard.jsx';
import TechnicalSheetCard from './composants/TechnicalSheetCard.jsx';
import AddToCartButton from './composants/AddToCartButton.jsx';

function Product() {
    // Récupérer les paramètres d'URL, y compris l'ID
    let { id } = useParams();

    return (
        <Grid>
            <Container>
                <PhotoCard />
            </Container>

            <Container>
                <TechnicalSheetCard />
            </Container>

            <Container>
                <DescriptionCard />
            </Container>

            <Container>
                <AddToCartButton />
            </Container>
        </Grid>
    );
}

export default Product;