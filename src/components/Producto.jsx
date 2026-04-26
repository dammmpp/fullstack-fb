import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function Producto({ id, nombre, categoria, precio, stock, url_imagen }) {
    const { agregarCarrito } = useContext(CartContext)
    
    return (
        <div className='border flex flex-col text-center border-zinc-200 p-4 rounded-md bg-white transition-all duration-300 hover:shadow-md hover:border-zinc-300'>
            <img
                src={url_imagen}
                alt={nombre}
                className='mb-2 rounded-md'
            />
            <div className='space-y-1'>
                <h2 className='font-normal text-base leading-tight'>{nombre}</h2>
                <p className='text-zinc-500 text-xs uppercase tracking-wider'>
                    {categoria}
                </p>
                <p className='text-zinc-900 text-sm font-medium'>
                    ${precio}
                </p>
                <p className='text-[10px] text-zinc-400 italic'>
                    Disponibles: {stock} unidades
                </p>
                <button 
                    className='rounded-md border border-green-600 w-full p-1 bg-green-600 font-normal text-white hover:bg-green-700 mt-2'
                    onClick={() => agregarCarrito({ id, nombre, precio, url_imagen })}
                >
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default Producto