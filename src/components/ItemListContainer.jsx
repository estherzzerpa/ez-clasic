// con una prop greeting y muestra el mensaje dentro del contenedor


import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <div className='bg-yellow-900 h-screen pt-20'>

     <h2 className='text-4xl'>Hola bienvenido {greeting}</h2> 

     <div >

     </div>


    </div>
  )
}

export default ItemListContainer