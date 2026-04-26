import React from 'react'

function Producto({ nombre, categoria, precio, stock, url_imagen }) {
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
                <button className='rounded-md border border-green-600 w-full p-1 bg-green-600 font-semibold text-white hover:bg-green-700'>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Producto