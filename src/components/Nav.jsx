import React from 'react'

function Nav() {
  return (
    <nav class="nv-navbar">
        <ul class="nv-nav-list">
            <li class="nv-nav-item">
                <a href="./home.html" class="nv-nav-link">Inicio</a>
            </li>
            <li class="nv-nav-item">
                <a href="./contacto.html" class="nv-nav-link">Contacto</a>
            </li>
                       <li class="nv-nav-item">
                <a href="./productos.html" class="nv-nav-link">Productos</a>
            </li>
                                 <li class="nv-nav-item">
                <a href="./agregarproductos.html" class="nv-nav-link">Agregar producto</a>
            </li>
        </ul>
    </nav>
  )
}

export default Nav
