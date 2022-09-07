import React, {useState} from 'react'
import imagen from "../../assets/images/imagen2.jpg"
import ItemCount from "./ItemCount"

const ItemListContainer = ({greeting}) => {

  // HOOKS

  const [stock, setStock] = useState(6)

  const [count, setCount] = useState(1)

  const onAdd = ()=>{

    setStock(stock - count)

    setCount(1)

    count >= stock && console.log( "No hay mas stock")

    console.log(stock)

  }

  return (

  <main className='container_main flex flex-wrap relative overflow-hidden h-[100%] w-[95%] justify-center top-32 m-auto overflow-y-scroll'>

      <div className='h-[95vh] w-[50%] bg-ochre-800  overflow-hidden relative'>

        <section className='absolute left-[60%] top-[18%] w-[90%] z-20'>

          <h2 className='text-[60px] font-bold text-white'>{greeting}</h2>
          <h2 className='text-[60px] font-bold text-white'>MAKE IT YOURS</h2>

        </section>

        <section className='text-white uppercase font-semibold absolute flex flex-col justify-between h-[80%] top-[12%] w-[100%]'>
          <p className='bg-ochre-300 text-[20px]'> we are independent, we our art is handmade</p>
          <p className='bg-ochre-400 text-[20px]'>and the designs we try to give it anything unique...</p>
          <p className='bg-ochre-500 text-[20px]'> BUT WHO MAKES IT UNIQUE ARE YOU, JUST BY WEARING IT.</p>
        </section>
      </div>

      <a className='px-3 py-3 bg-white w-[130px] absolute top-[60%] m-auto z-10 uppercase font-bold text-[#cf6f08ef]' href="">GO SHOP</a>


      <div className='w-[50%] h-[95vh] overflow-hidden relative'>

        <img className='min-w-[600px] w-[100%]' src={imagen} alt="" />

        <section className='absolute left-[-40%] top-[18%] w-[90%]'>
          <h2 className='text-[60px] font-bold text-ochre-600'>20% OFF</h2>
          <h2 className='text-[60px] font-bold text-ochre-600'>MAKE IT YOURS</h2>
        </section>
      </div>  

      <ItemCount onAdd={onAdd} stock={stock} setStock={setStock} count={count} setCount={setCount}  />
      

    </main>
  
)}

export default ItemListContainer