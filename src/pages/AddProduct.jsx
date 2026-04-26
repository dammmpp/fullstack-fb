import React from 'react'

function AddProduct({ titulo }) {
    return (
        <div className='max-w-2xl mx-auto'>
            <h1 className='p-4 text-3xl text-center font-normal'>{titulo}</h1>
            
            <section className='p-6 flex flex-col gap-4'>
                <p className='text-zinc-500 mb-2 text-sm'>Formulario para el ingreso de nuevos artículos al sistema.</p>
                
                <input 
                    type="text" 
                    placeholder="Nombre del producto" 
                    className="border border-gray-300 p-2 rounded-md outline-none focus:border-zinc-400 text-sm"
                />

                <input 
                    type="text" 
                    placeholder="Categoría" 
                    className="border border-gray-300 p-2 rounded-md outline-none focus:border-zinc-400 text-sm"
                />

                <input 
                    type="number" 
                    placeholder="Precio" 
                    className="border border-gray-300 p-2 rounded-md outline-none focus:border-zinc-400 text-sm"
                />

                <input 
                    type="number" 
                    placeholder="Stock" 
                    className="border border-gray-300 p-2 rounded-md outline-none focus:border-zinc-400 text-sm"
                />

                <input 
                    type="text" 
                    placeholder="URL de la imagen" 
                    className="border border-gray-300 p-2 rounded-md outline-none focus:border-zinc-400 text-sm"
                />

                <button className='mt-2 bg-zinc-800 text-white p-2 rounded-md hover:bg-zinc-700 transition-colors text-sm font-normal'>
                    Cargar Producto
                </button>
            </section>
        </div>
    )
}

export default AddProduct