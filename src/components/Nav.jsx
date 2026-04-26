import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import Carrito from './Carrito' // Importamos el componente que haremos ahora

function Nav() {
    const { carrito } = useContext(CartContext)
    const [mostrarCarrito, setMostrarCarrito] = useState(false)

    const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0)

    return (
        <>
            <nav className='flex justify-between items-center p-5 bg-white border-b border-zinc-200 sticky top-0 z-40'>
                <ul className='flex gap-6 text-sm font-normal text-zinc-600'>
                    <li><Link to="/" className='hover:text-zinc-900'>Home</Link></li>
                    <li><Link to="/productos" className='hover:text-zinc-900'>Productos</Link></li>
                    <li><Link to="/add-product" className='hover:text-zinc-900'>Cargar</Link></li>
                    <li><Link to="/contacto" className='hover:text-zinc-900'>Contacto</Link></li>
                </ul>

                <div 
                    className='relative cursor-pointer' 
                    onClick={() => setMostrarCarrito(!mostrarCarrito)}
                >
                    <span className='text-sm font-normal text-zinc-800'>🛒 Carrito</span>
                    {totalItems > 0 && (
                        <span className='absolute -top-2 -right-4 bg-green-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full'>
                            {totalItems}
                        </span>
                    )}
                </div>
            </nav>

            {/* Renderizado condicional del carrito */}
            {mostrarCarrito && <Carrito cerrar={() => setMostrarCarrito(false)} />}
        </>
    )
}

export default Nav