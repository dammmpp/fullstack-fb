import React, { useState } from 'react'

function AddProduct() {
    const [inputValue, setinputValue] = useState('');
    const[valorEnviado, setValorEnviado] = useState('')
    return (
        <form action="" className='flex flex-col gap-2 p-4 bg-blue-200'>
            <label htmlFor="">Titulo</label>
            <input type="text" className='border bg-white border-blue-300' />
            <label htmlFor="">Precio</label>
            <input type="text" className='border bg-white border-blue-300' />
            <label htmlFor="">Categoria</label>
            <input type="text" className='border bg-white border-blue-300' />
            <button className='bg-blue-500 hover:bg-blue-600 text-white p-2 transition-colors'>Guardar</button>
        </form>
    )
}

export default AddProduct
 