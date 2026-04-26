import React from 'react'
import { Link } from 'react-router-dom'

function Home({ titulo }) {
    return (
        <div className='max-w-5xl mx-auto'>
            <h1 className='p-4 text-3xl text-center font-normal'>{titulo}</h1>
            
            <section className='p-6'>
                <p className='text-zinc-500 mb-8 text-center'>
                    Bienvenido a la plataforma. Seleccioná una sección para comenzar.
                </p>

                {/* Accesos directos en forma de cajas */}
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
                    
                    <Link to="/productos" className='border border-zinc-200 p-6 rounded-md bg-white text-center transition-all hover:border-zinc-300'>
                        <h2 className='text-lg font-normal mb-1'>Productos</h2>
                        <p className='text-xs text-zinc-400'>Ver el inventario completo</p>
                    </Link>

                    <Link to="/add-product" className='border border-zinc-200 p-6 rounded-md bg-white text-center transition-all hover:border-zinc-300'>
                        <h2 className='text-lg font-normal mb-1'>Cargar Nuevo</h2>
                        <p className='text-xs text-zinc-400'>Ingresar artículos al sistema</p>
                    </Link>

                    <Link to="/contacto" className='border border-zinc-200 p-6 rounded-md bg-white text-center transition-all hover:border-zinc-300'>
                        <h2 className='text-lg font-normal mb-1'>Contacto</h2>
                        <p className='text-xs text-zinc-400'>Soporte y consultas</p>
                    </Link>

                </div>
            </section>
        </div>
    )
}

export default Home