
import CartWidget from "../header/CartWidget"
import Registro from "./Registro"

const NavBar = () => {

  return (

    <div className="text-white font-fontPrincipal flex justify-center">

        <Registro></Registro>
  
        <header className="flex h-16 text-sm  justify-between items-center shadow-md bg-ochre-800  font-light transition-color duration-100 absolute w-[95%] top-12  px-7 z-30">
          <ul className="flex justify-evenly  w-screen">
          
            <a href="#"><li className="px-6 hover:text-[#cf6f08ef] transition-all duration-150">Home</li></a>
            <a href="#"><li className="px-6 hover:text-[#cf6f08ef] transition-all duration-150">Productos</li></a>     
            <a href="#"><li className="px-6 hover:text-[#cf6f08ef] transition-all duration-150">loto clasic</li></a> 
            <a href="#"><li className="px-6 hover:text-[#cf6f08ef] transition-all duration-150">loto Under</li></a> 
            <a href="#"><li className="px-6 hover:text-[#cf6f08ef] transition-all duration-150">OUFITS</li></a>

          </ul>

            <CartWidget />
            
        </header>       
    </div>
  )
}

export default NavBar
