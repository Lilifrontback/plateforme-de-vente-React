import * as React from 'react';
import { Button, Center } from '@chakra-ui/react';

function AddToCartButton() {
    return (
        <Center>
            <Button colorScheme='blue' variant='solid' size='md'>
                Add To Cart
            </Button>
        </Center>
    )
}

export default AddToCartButton;