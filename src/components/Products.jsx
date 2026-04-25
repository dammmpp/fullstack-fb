import React, { useState } from 'react'
import Product from './Product'

function Products() {
    const [titulo] = useState("Ultimas compras")
    const [productos, setProductos] = useState([
        {
            id: 1,
            title: "Monitor 120HZ",
            precio: 5000,
            
        },
        {
            id: 2,
            title: "Monitor 180HZ",
            precio: 5000,
            category: "Perifericos"
        }
    ])

    return (
        <div className='grid grid-cols-6 gap-4 p-4'>
            <h2 className='text-zinc-800 text-lg col-span-6 bg-zinc-200 p-4'>{titulo}</h2>
            {productos.map(producto => {
                return <Product title={producto.title} precio={producto.precio}></Product>
            })}
        </div>
    )
}

export default Products