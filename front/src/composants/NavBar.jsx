import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Spacer, Button, ButtonGroup, IconButton, useColorMode, useColorModeValue, Image } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

function NavBar() {
  const { toggleColorMode } = useColorMode();
  const colorModeIcon = useColorModeValue(<FaMoon />, <FaSun />);

//Rajouter écart entre les boutons de gauche

  return (
    <Box boxShadow="lg" bg="#254356" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Flex alignItems="center">
            <Image src="../src/assets/images/logo.png" alt="Logo" h={10} mr={6} />
            <Link to="/">
              <Button color="white" variant="outline" _hover={{bg:'#355B74'}} mr={4}>
                Accueil
              </Button>
            </Link>
            <Link to="/connexion">
              <Button color="white" variant="outline" _hover={{bg:'#355B74'}} mr={4}>
                Connexion
              </Button>
            </Link>
            <Link to="/inscription">
              <Button color="white" variant="outline" _hover={{bg:'#355B74'}}>
                Inscription
              </Button>
            </Link>
          </Flex>
        </Box>
        <Spacer />
        <ButtonGroup spacing={4}>
        <Link to="/admin">
              <Button color="white" variant="outline" _hover={{bg:'#355B74'}}>
                Admin
              </Button>
        </Link>
        <Link to="/basket">
              <Button color="white" variant="outline" _hover={{bg:'#355B74'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
              </svg>
              </Button>
        </Link>
        {/* <IconButton
          aria-label="Toggle color mode"
          icon={colorModeIcon}
          onClick={toggleColorMode}
          variant="ghost"
        /> */}
        </ButtonGroup>
      </Flex>
    </Box>
  );
}

export default NavBar;
