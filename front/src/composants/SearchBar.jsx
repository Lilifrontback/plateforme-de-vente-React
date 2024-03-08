 import React from 'react';

 import data from './TemplateData.json';


// barre de recherche --> apparait

function SearchBar() {
  return (
    <form>
    <input id="searchInput" type="text" placeholder="Search..." />
    <button type="submit">Search</button>
  </form>
  );
};




//to d@ : recherche filtrée via BDD Json
// voir tut@ trello to d@ front

// sinon j'ai essayé avec ce début de fonction, 
//normalement c'est censé fonctionner avec composants 'Home'(anciennement 'App') et 'ResultContainer'

//App.jsx:
// import React, { useState } from 'react';
// import SearchBar from './SearchBar';
// import Results from './Results';
// import data from './votre_base_de_donnees.json';

// const App = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredData, setFilteredData] = useState(data);

//   const handleSearch = (term) => {
//     setSearchTerm(term);

//     const filteredResults = data.filter(item =>
//       item.nom.toLowerCase().includes(term.toLowerCase())
//     );

//     setFilteredData(filteredResults);
//   };

//   return (
//     <div>
//       <SearchBar onSearch={handleSearch} />
//       <Results data={filteredData} />
//     </div>
//   );
// };


//Result.jsx 
//const Results = ({ data }) => (
//   <ul>
//     {data.map(item => (
//       <li key={item.id}>{item.nom}</li>
//     ))}
//   </ul>
// );

// const SearchBar = ({ onSearch }) => (
//   <form>
//   <input
//     type="text"
//     placeholder="Rechercher..."
//     onChange={(e) => onSearch(e.target.value)}/>
//   <button type="submit" >Search</button>
  
//   </form>
// );

export default SearchBar;