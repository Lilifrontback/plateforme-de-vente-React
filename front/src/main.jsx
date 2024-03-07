import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './composants/NavBar';
import Connexion from './composants/Connexion'; // Assurez-vous d'importer correctement le composant Connexion

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
        <NavBar />
          <Routes>
          <Route path="/connexion" element={<Connexion />} />
          </Routes>
          
      </Router>
  </React.StrictMode>
)
