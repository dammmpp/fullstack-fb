import React, { useEffect, useState } from 'react'
import Producto from '../components/Producto.jsx'

function Productos({ titulo }) {
  const [articulos, SetArticulo] = useState([])
  useEffect(() => {
    fetch('/Articulos.json')
      .then(res => res.json())
      .then(data => {
        SetArticulo(data)
      })
      .catch(err => console.log(err))
  }, [])


  return (
    <div>
      <h1 className='p-4 text-3xl text-center font-normal'>{titulo}</h1>
      <section className='p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5'>
        <p className='col-span-6'>Listado de artículos del almacén.</p>
        {articulos.map((prod) => (
          <Producto
            key={prod.id} // Siempre recordá la key
            nombre={prod.nombre}
            categoria={prod.categoria}
            precio={prod.precio}
            stock={prod.stock}
            url_imagen={prod.url_imagen}
          />
        ))}
      </section>
    </div>
  )
}

export default Productos