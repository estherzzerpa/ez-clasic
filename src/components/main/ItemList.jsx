import React from 'react'
import Item from './Item'

import ClipLoader from "react-spinners/ClipLoader";

const ItemList = ({listProduct, loading}) => {


  return (
    <div  className='bg-ochre-100 flex flex-wrap w-[100%] h-[140%] justify-center '>
    
    {
        loading ? <ClipLoader color={"#593713"} loading={loading}  size={150} /> :  listProduct.map((product)=>{ return(<Item key={product.id} product={product}></Item> ) })
    
    }
            
    </div>
  )
}

export default ItemList