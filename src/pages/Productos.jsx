import React, { useEffect, useState } from 'react'
import Producto from '../components/Producto.jsx'
import Carrito from '../components/Carrito'

function Productos({ titulo }) {
  const [articulos, SetArticulo] = useState([])
  const [busqueda, setBusqueda] = useState("")

  useEffect(() => {
    fetch('/Articulos.json')
      .then(res => res.json())
      .then(data => {
        SetArticulo(data)
      })
      .catch(err => console.log(err))
  }, [])

  const articulosFiltrados = articulos.filter((prod) =>
    prod.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    prod.categoria.toLowerCase().includes(busqueda.toLowerCase())
  )
  const categorias = [...new Set(articulosFiltrados.map(prod => prod.categoria))];

  return (
    <div>
      <h1 className='p-4 text-3xl text-center font-normal'>{titulo}</h1>
      <section className='p-6 flex flex-col gap-3'>
        <p>Listado de artículos del almacén.</p>
        <input
          type="text"
          placeholder='Buscar articulo...'
          className='border w-full p-2 bg-white rounded-md border-gray-300 outline-none focus:border-zinc-400'
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        <div className='flex flex-col gap-10 mt-6'>
          {categorias.map((cat) => (
            <div key={cat} className='w-full'>
              <h2 className='text-xl font-normal mb-4 border-b border-zinc-100 pb-1'>
                {cat}
              </h2>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5'>
                {articulosFiltrados
                  .filter(prod => prod.categoria === cat)
                  .map((prod) => (
                    <Producto
                      key={prod.id}
                      {...prod}
                    />
                  ))
                }
              </div>
            </div>
          ))}
        </div>

        {articulosFiltrados.length === 0 && (
          <p className='text-center text-zinc-400 mt-10'>No se encontraron resultados.</p>
        )}
      </section>
    </div>
  )
}

export default Productos