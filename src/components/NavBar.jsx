
import CartWidget from "./CartWidget"

const NavBar = () => {

  return (

    <div className="text-white  font-fontPrincipal">

        <header className="flex h-16 text-sm  justify-between items-center shadow-md bg-yellow-900 font-light transition-color duration-100 fixed w-screen px-7">

          <div className="brand "><p className="underline">LOTO </p><span className=" no-underline text-xs">clasic</span> </div>

          <ul className="flex justify-evenly  w-screen">

            <a href="#"><li className="px-6 hover:text-yellow-600 transition-all duration-150">Home</li></a>
            <a href="#"><li className="px-6 hover:text-yellow-600 transition-all duration-150">Productos</li></a>     
            <a href="#"><li className="px-6 hover:text-yellow-600 transition-all duration-150">loto clasic</li></a> 
            <a href="#"><li className="px-6 hover:text-yellow-600 transition-all duration-150">loto Under</li></a> 

          </ul>

            <CartWidget />
            
        </header>       
    </div>
  )
}

export default NavBar
