import React, { useState } from "react";
import { Box, Button, Input, Heading, Link as ChakraLink } from "@chakra-ui/react";

function Connexion() {
  // Déclaration d'un état pour le login avec useState
  const [login, setLogin] = useState("");
  // Déclaration d'un état pour le mot de passe avec useState
  const [password, setPassword] = useState("");

  return (
    <Box display="flex" justifyContent="center" mt={8}>
      <Box maxW="md" p={8} borderWidth={1} borderRadius="lg">
        <Heading as="h2" size="lg" mb={4}>Connexion</Heading>
        <Box as="form" className="login-form">
          <label>Se connecter</label>
          {/* Champ de login */}
          <Input
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            placeholder="Se connecter"
            mb={2}
          />
          <label>Mot de passe</label>
          {/* Champ de mot de passe */}
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de passe"
            mb={4}
          />
          {/* Bouton pour soumettre le formulaire */}
          <Button colorScheme="blue" onClick={() => console.log("Login:", login, "Password:", password)}>
            Se connecter
          </Button>
        </Box>
        <Box mt={8} borderTopWidth={1} pt={8}>
          <Heading as="h2" size="lg" mb={4}>Créer un compte</Heading>
          <p>Vous n'avez pas de compte ?</p>
          {/* Lien pour créer un compte */}
          <ChakraLink href="#">Créer un compte</ChakraLink>
        </Box>
      </Box>
    </Box>
  );
}

// Exportation du composant Connexion
export default Connexion;
