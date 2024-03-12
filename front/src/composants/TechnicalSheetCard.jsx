import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';

function TechnicalSheetCard({ product }) {
    return (
        <Flex justifyContent="flex-end" alignItems="center" mt={4} >
            <Box bg="blue.500" p={4} borderRadius="md" w='300px'>
                <Text fontWeight="bold" mb={2}>Caractéristiques :</Text>
                <Text>Nom: {product.nom}</Text>
                <Text>Prix: {product.prix}€</Text>
                <Text>Matière: {product.matiere}</Text>
                <Text>Couleur: {product.couleur}</Text>
                <Text>Dimensions: {product.dimension}</Text>
            </Box>
        </Flex>
    );
}

export default TechnicalSheetCard;