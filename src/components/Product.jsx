import React from 'react'

function Product({ title, precio }) {
    return (
        <div className='flex flex-col border bg-white border-zinc-200 p-4 gap-3'>
            <img className='border border-zinc-100 h-40 w-full object-contain' src="" alt="" />
            
            <div className='flex flex-col gap-1'>
                <span className='text-zinc-800'>{title}</span>
                <span className='text-zinc-500 font-light'>${precio}</span>
            </div>

            <button className='bg-green-500 hover:bg-green-600 text-white p-2 transition-colors'>
                Agregar al carrito
            </button>
        </div>
    )
}

export default Product