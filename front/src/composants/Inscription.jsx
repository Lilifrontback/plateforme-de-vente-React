// Import des modules nécessaires
import React, { useState } from "react";
import { Box, Button, Input, Heading} from "@chakra-ui/react";

function Inscription() {
  // Déclaration d'un état pour les champs du formulaire
  const [formData, setFormData] = useState({nom: "", mail: "", motdepasse: "", telephone: ""});
// Fonction asynchrone qui envoie les données du formulaire vers l'URL spécifiée,
  const Submit = async () => {
    try {
      const response = await fetch('http://localhost:3000/utilisateurs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  // Réinitialiser le formulaire après une inscription réussie si nécessaire
        setFormData({ nom: '',mail: '', motdepasse: '',telephone: '',});} 
        catch (error) {
        console.error('Erreur:', error);
       }
       };

  return (
    <Box backgroundImage="url('../src/assets/images/pattern_flower.png')" display="flex" justifyContent="center">
      <Box maxW="md" p={8} borderWidth={1} borderRadius="lg" bg='white' variant = 'solid' mt={8} mb={8}>
        <Heading as="h2" size="lg" mb={4}>Inscription</Heading>
        <Box as="form" className="inscription-form">
          {/* Champ de nom */}
          <Input type="text" name="nom" value={formData.nom} onChange={(e) => setFormData({...formData, nom: e.target.value })}
            placeholder="Nom"
            mb={2}
          />
          {/* Champ d'email */}
          <Input type="email" name="mail" value={formData.mail} onChange={(e) => setFormData({...formData, mail: e.target.value })}
            placeholder="Email"
            mb={2}
          />
          {/* Champ de mot de passe */}
          <Input type="password" name="motdepasse" value={formData.motdepasse} onChange={(e) => setFormData({...formData, motdepasse: e.target.value })}
            placeholder="Mot de passe"
            mb={2}
          />
          {/* Champ de téléphone */}
          <Input type="tel" name="telephone" value={formData.telephone} onChange={(e) => setFormData({...formData, telephone: e.target.value })}
            placeholder="Téléphone"
            mb={4}
          />
          {/* Bouton pour soumettre le formulaire */}
          <Button bg='#254356' color="white" variant='solid' _hover={{bg:'#355B74'}} size='md' onClick={Submit}>
            S'inscrire
          </Button>
        </Box>
      </Box>
    </Box>
  );
}


export default Inscription;
