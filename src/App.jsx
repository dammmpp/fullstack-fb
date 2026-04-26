import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' // Quitamos Link que no se usa aquí

import Layout from './components/Layout'
import Home from './pages/Home'
import Productos from './pages/Productos'
import AddProduct from './pages/AddProduct'
import Contacto from './pages/Contacto'
import NotFound from './pages/NotFound'
import { useState } from 'react'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home titulo="Hogar" />} />
            <Route path="/productos" element={<Productos titulo="Almacén" />} />
            <Route path="/contacto" element={<Contacto titulo="Contacto" />} />
            <Route path="/add-product" element={<AddProduct titulo="Agregar Producto" />} />
            <Route path="*" element={<NotFound titulo="Página no encontrada" />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>

  )
}

export default App