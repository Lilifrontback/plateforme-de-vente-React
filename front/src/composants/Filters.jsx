import React, { useState } from 'react';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

//Filtres prend deux propriétés en param : liste de filtre, et un callback qd le filtre est sélectionné
function Filtres ({ filters, onSelectFilter }) {

//On garde en mémoire avec useSate le filtre sélectionné 
const [selectedFilter, setSelectedFilter] = useState(null);

//On crée une fonction gérerFiltreChoisi qui appelle onSelectFilter sur le filtre choisi
function gererFiltreChoisi (fitreChoisi) {
  setSelectedFilter(fitreChoisi);
  onSelectFilter(fitreChoisi);
};
//On retourne le bouton
  return (
    <Menu>
      <MenuButton as={Button}>Filtrer: {selectedFilter || 'Choisir le filtre'}</MenuButton>
      <MenuList>
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