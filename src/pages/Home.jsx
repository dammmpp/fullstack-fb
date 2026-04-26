import React from 'react'

function Home({ titulo }) {
  return (
    <div>
      <h1 className='p-4 text-3xl text-center font-normal'>{titulo}</h1>
      <section className='p-6'>
        <p>Bienvenido a la plataforma. Este es el contenido principal del home.</p>
      </section>
    </div>
  )
}

export default Home