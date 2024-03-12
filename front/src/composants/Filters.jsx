import React, { useState } from 'react';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

// Filtres prend deux propriétés en param : liste de filtre, et un callback qd le filtre est sélectionné
const Filtres = ({ filters, onSelectFilter }) => {

//stockage avec useSate du filtre sélectionné
  const [selectedFilter, setSelectedFilter] = useState(null);

//Fonction qui prend en paramètre un filtre et met à jour le useState "slectedFilter"
//Appel de la fonction "onSelectFilter" sur le filtre choisi
  const gererFiltreChoisi = (fitreChoisi) => {
    setSelectedFilter(fitreChoisi);
    onSelectFilter(fitreChoisi);
  };

  return (
    <Menu>
      <MenuButton as={Button}>Filtrer: {selectedFilter || 'Choisir le filtre'}</MenuButton>
      <MenuList>
        {filters.map((filter) => (
          <MenuItem key={filter} onClick={() => handleSelectedFilters(filter)}>
            {filter}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default Filtres;