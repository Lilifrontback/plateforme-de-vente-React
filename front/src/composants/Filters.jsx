import React, { useState } from 'react';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

//Filtres prend deux propriétés en param : liste de filtre, et un callback qd le filtre est sélectionné
function Filtres ({ filters, onSelectFilter, filterType, selectedFilter }) {



//On crée une fonction gérerFiltreChoisi qui appelle onSelectFilter sur le filtre choisi
function gererFiltreChoisi (fitreChoisi) {
  onSelectFilter(fitreChoisi);
};

// Déterminer la valeur par défaut en fonction du type de filtre (pour MAJ le bouton)
let defaultLabel = '';
if (selectedFilter === null || selectedFilter === 'Aucun') {
  
  if (filterType === 'categorie') {
    defaultLabel = 'Catégorie';
  } else if (filterType === 'couleur') {
    defaultLabel = 'Couleur';
  } else if (filterType === 'matiere') {
    defaultLabel = 'Matière';
  }
} else {
  defaultLabel = selectedFilter;
}

//On retourne le bouton
  return (
    <Menu>
      <MenuButton bg='#254356' color="white" variant='solid' _hover={{bg:'#355B74'}} as={Button}> {defaultLabel} </MenuButton>
      <MenuList>
      <MenuItem key="Aucun" onClick={() => gererFiltreChoisi("Aucun")}>
          Aucun
        </MenuItem>
        {/* On va appeller sur le click du filtre, la fonction qui garde en mémoire le filtre choisi */}
        {filters.map((filter) => (
          <MenuItem key={filter} onClick={() => gererFiltreChoisi(filter)}>
            {filter}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default Filtres;