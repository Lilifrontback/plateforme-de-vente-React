import React from 'react';
import { Box, Image } from '@chakra-ui/react';

function PhotoCard({ image }) {
    return (
        <Box mt={4}>
            <Image src={image} alt="Product" maxW="400px" h="auto" borderRadius="md" />
        </Box>
    );
}

export default PhotoCard;