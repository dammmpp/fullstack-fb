import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <ul className='flex gap-5 p-5 bg-blue-300'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add-product">Add Product</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
            </ul>
        </nav>
    )
}

export default Nav