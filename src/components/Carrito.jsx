import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function Carrito({ cerrar }) {
    const { carrito, eliminarDelCarrito, vaciarCarrito, agregarCarrito } = useContext(CartContext)

    const totalCompra = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0)

    return (
        <div className='fixed inset-0 bg-black/50 z-50 flex justify-end'>
            <div className='absolute inset-0' onClick={cerrar}></div>

            <div className='relative w-full max-w-md bg-white h-full shadow-xl p-6 flex flex-col'>
                <div className='flex justify-between items-center border-b border-zinc-100 pb-4 mb-4'>
                    <h2 className='text-xl font-normal text-zinc-800'>Tu Carrito</h2>
                    <button onClick={cerrar} className='text-zinc-400 hover:text-zinc-800 text-2xl'>&times;</button>
                </div>

                <div className='flex-1 overflow-y-auto space-y-4 pr-2'>
                    {carrito.length === 0 ? (
                        <p className='text-center text-zinc-400 mt-10 font-light'>El carrito está vacío.</p>
                    ) : (
                        carrito.map((item) => (
                            <div key={item.id} className='flex gap-4 border-b border-zinc-50 pb-4 items-center'>
                                <img src={item.url_imagen} alt={item.nombre} className='w-14 h-14 object-contain' />
                                <div className='flex-1'>
                                    <h3 className='text-sm font-normal text-zinc-800'>{item.nombre}</h3>
                                    <p className='text-xs text-zinc-500 font-light'>${item.precio} por unidad</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <button 
                                        onClick={() => eliminarDelCarrito(item.id)}
                                        className='w-7 h-7 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 text-zinc-600 transition-colors'
                                    >
                                        -
                                    </button>
                                    <span className='text-sm font-normal w-4 text-center'>{item.cantidad}</span>
                                    <button 
                                        onClick={() => agregarCarrito(item)}
                                        className='w-7 h-7 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 text-zinc-600 transition-colors'
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {carrito.length > 0 && (
                    <div className='border-t border-zinc-100 pt-4 mt-4'>
                        <div className='flex justify-between items-center mb-6'>
                            <span className='text-zinc-500 font-light'>Total estimado:</span>
                            <span className='text-2xl font-normal text-zinc-900'>${totalCompra}</span>
                        </div>
                        
                        <div className='flex flex-col gap-2'>
                            <button className='w-full bg-zinc-900 text-white p-3 rounded-md text-sm hover:bg-zinc-800 transition-colors font-normal'>
                                Finalizar Compra
                            </button>
                            
                            <button 
                                onClick={vaciarCarrito}
                                className='w-full text-zinc-400 text-xs hover:text-red-500 py-2 transition-colors font-light'
                            >
                                Vaciar todo el carrito
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Carrito