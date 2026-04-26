import React from 'react'

function NotFound({ titulo }) {
  return (
    <div>
      <h1 className='p-4 text-3xl text-center font-normal'>{titulo}</h1>
      <section className='p-6 text-center'>
        <p>Lo sentimos, la página que estás buscando no existe.</p>
        <p className='text-gray-500 mt-2'>Error 404</p>
      </section>
    </div>
  )
}

export default NotFound