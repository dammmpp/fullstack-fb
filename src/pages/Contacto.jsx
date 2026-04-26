import React from 'react'

function Contacto({ titulo }) {
    return (
        <div className='max-w-2xl mx-auto'>
            <h1 className='p-4 text-3xl text-center font-normal'>{titulo}</h1>
            
            <section className='p-6 flex flex-col gap-4'>
                <p className='text-zinc-500 mb-2 text-sm'>Ponte en contacto con nosotros para cualquier consulta sobre el inventario.</p>
                
                <input 
                    type="text" 
                    placeholder="Nombre" 
                    className="border border-gray-300 p-2 rounded-md outline-none focus:border-zinc-400 text-sm"
                />

                <input 
                    type="text" 
                    placeholder="Apellido" 
                    className="border border-gray-300 p-2 rounded-md outline-none focus:border-zinc-400 text-sm"
                />

                <input 
                    type="email" 
                    placeholder="Correo electrónico" 
                    className="border border-gray-300 p-2 rounded-md outline-none focus:border-zinc-400 text-sm"
                />

                <input 
                    type="tel" 
                    placeholder="Celular" 
                    className="border border-gray-300 p-2 rounded-md outline-none focus:border-zinc-400 text-sm"
                />

                <textarea 
                    placeholder="Descripción o mensaje" 
                    rows="4"
                    className="border border-gray-300 p-2 rounded-md outline-none focus:border-zinc-400 text-sm resize-none"
                />

                <button className='mt-2 bg-zinc-800 text-white p-2 rounded-md hover:bg-zinc-700 transition-colors text-sm font-normal'>
                    Enviar Mensaje
                </button>
            </section>
        </div>
    )
}

export default Contacto