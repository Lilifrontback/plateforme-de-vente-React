import * as React from 'react';
import { SimpleGrid, Box } from '@chakra-ui/react';


function PhotoCard(){

    return (
        <SimpleGrid columns={2} spacingX='40px' spacingY='20px'>
            <Box bg='tomato' height='150px'></Box>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
        </SimpleGrid>
    )
}

export default PhotoCard;