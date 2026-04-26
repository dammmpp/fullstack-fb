import React from 'react'

function AddProduct({ titulo }) {
  return (
    <div>
      <h1 className='p-4 text-3xl text-center font-normal'>{titulo}</h1>
      <section className='p-6'>
        <p>Formulario para el ingreso de nuevos artículos al sistema.</p>
      </section>
    </div>
  )
}

export default AddProduct