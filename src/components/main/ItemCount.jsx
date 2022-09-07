import imgProduct from '../../assets/images/imagen2.jpg'
import plus from '../../assets/icon/bx-plus.svg'
import minus from '../../assets/icon/bx-minus.svg'
import { isDisabled } from '@testing-library/user-event/dist/utils'

const ItemCount = ({onAdd, stock, count, setCount}) => {

    const pluss = () =>{

        count < stock && setCount(count + 1)

    }

    const subtr = ()=>{

        count > 1 && setCount(count - 1)
        console.log(stock)
    }


  return (
     <div className='bg-ochre-100 flex flex-wrap w-[100%] h-[120%] justify-center overflow-hidden'>

        <div className="card w-[25%] h-[30%] min-w-[240px] transition-all m-4 hover:shadow-xl">

            <div className='overflow-hidden relative'>
                
                <img className='w-[100%] min-w-[280px] cursor-pointer  bg-center hover:scale-[1.1] transition-all' src={imgProduct} alt="" />

                <h2 className='absolute top-[90%] left-[35%] text-white uppercase font-bold'>buzo liso</h2>
            </div>

            <div className='flex flex-col justify-between items-center h-[35%] px-2 py-1 bg-white'>

                <div className='count flex justify-center w-[100%] border-solid border-2 border-orange-800'>

                    <button onClick={subtr}><img src={minus} alt="" /></button>
                    <span className='uppercase mx-6'>{count}</span>
                    <button onClick={pluss}><img src={plus} alt="" /></button>
                </div>

                <div className='flex justify-between w-100%'>

                    {/* LLAMAR AL CALL BACK */}

                    <button onClick={stock ? onAdd : isDisabled }  href="#" className='bg-ochre-700 text-white py-1  px-2 uppercase'>Anadir al carrito</button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemCount