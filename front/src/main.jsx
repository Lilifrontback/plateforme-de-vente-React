import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'

// Installation npm install react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Home.jsx'
import Product from './Product.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Path = '/' -> page par défaut */}
          <Route path="/product/:id" element={<Product />} />
          {/* Path = '/"exemple"' -> permet d'accder à la page correspondante voir <Link> page Home */}
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
)
