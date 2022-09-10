import React, {useState, useEffect} from 'react'
import imagen from "../../assets/images/imagen2.jpg"
import ItemList from './ItemList'
import imgBuzo from '../../assets/images/imagen2.jpg'

const ItemListContainer = ({greeting}) => {

  // HOOKS

  // const [stock, setStock] = useState(6)

  // const [count, setCount] = useState(1)

  // const onAdd = ()=>{

  //   setStock(stock - count)

  //   setCount(1)

  //   count >= stock && console.log( "No hay mas stock")

  //   console.log(stock)

  // }
  const [listProduct, setListProduct] = useState([])
  const [loading, setLoading]= useState(false)

  // crear el objeto de productos

  const objProducts = [
    {categoria:"buzos", id:0, precio:2000, stock:5, urlImg: imgBuzo},
    {categoria:"remeras", id:1, precio:1000, stock:9, urlImg: imgBuzo},
    {categoria:"corsets", id:2, precio:3000, stock:7, urlImg: imgBuzo},
    {categoria:"blusas", id:3, precio:1400, stock:10, urlImg: imgBuzo}
  ]

  const promise = new Promise((res, rej)=>{
    setTimeout(() => {
      res(objProducts)
    }, 2000);
  })

useEffect(()=>{
  setLoading(true)
    promise
    .then((data)=>{
      setListProduct(data)
      console.log(listProduct)
    })
    .catch(()=>{
      console.log("mal");
    })
    .finally(()=>{
      setLoading(false)
    })

  },[])

  return (

  <main className='container_main flex flex-wrap relative overflow-hidden h-[100%] w-[95%] justify-center top-32 m-auto overflow-y-scroll'>

      <div className='w-[100%] h-[95vh] overflow-hidden   relative'>

        <img className='min-w-[600px] w-[100%]' src={imagen} alt="" />
        <button className=' btn px-3 py-3  w-[150px] absolute  top-[80%] flex justify-center items-center left-[45%] z-10 uppercase' href="">GO SHOP</button>
        <section className='absolute left-[5%] top-[20%] w-[90%]'>
          <h2 className='text-[4rem] font-bold text-ochre-800'>{greeting}</h2>
          <h2 className='text-[4rem] font-bold text-ochre-800'>MAKE IT YOURS</h2>
        </section>
      </div>  

      {/* <ItemCount onAdd={onAdd} stock={stock} setStock={setStock} count={count} setCount={setCount}  /> */}

      <ItemList listProduct={listProduct} loading={loading}></ItemList>

    </main>
  
)}

export default ItemListContainer