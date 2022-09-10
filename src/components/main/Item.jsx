import React from 'react'


const Item = ({product}) => {

    console.log(product)
    
  return (
         <div className="card w-[22%] h-[30%]  min-w-[240px] transition-all m-4 hover:shadow-xl">

            <div className='overflow-hidden  relative'>
                
                <img className='w-[100%] min-w-[280px] cursor-pointer  bg-center hover:scale-[1.1] transition-all' src={product.urlImg} alt="" />

                <h2 className='absolute top-[90%] left-[35%] text-white uppercase font-bold'>{product.categoria}</h2>

            </div>

            <div className='flex flex-col justify-between items-center h-[40%] px-2 py-1 bg-white'>

                <div className='flex justify-around w-[100%]'>

                    <p className='border-orange-400  px-2  border-solid border-2'>S</p>
                    <p className='border-orange-400 px-2 border-solid border-2'>L</p>
                    <p className='border-orange-400 px-2 border-solid border-2'>M</p>

                </div>

                <div className='flex  flex-col w-100%'>
                    <p>{product.precio}</p>
                    {/* LLAMAR AL CALL BACK */}

                    <button  href="#" className='bg-ochre-700 text-white py-1  px-2 uppercase'>Comprar</button>

                </div>
            </div>
        </div>
  )
}

export default Item