// con una prop greeting y muestra el mensaje dentro del contenedor


import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <div>

     <h2 className='text-8xl'>Hola bienvenido {greeting}</h2> 


    </div>
  )
}

export default ItemListContainer