import * as React from 'react';
import { Button, Center } from '@chakra-ui/react';

function AddToCartButton() {
    return (        
            <Button bg='#254356' color="white" variant='solid' _hover={{bg:'#355B74'}} size='md'>
                Ajouter au panier
            </Button>       
    )
}

export default AddToCartButton;