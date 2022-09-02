// con una prop greeting y muestra el mensaje dentro del contenedor


import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <div>Hola bienvenido {greeting}</div>
  )
}

export default ItemListContainer