
import CartWidget from "./CartWidget"

const NavBar = () => {

  return (

    <div className="text-white  font-fontPrincipal">

        <header className="flex h-16  justify-around items-center shadow-sm bg-yellow-900 font-light transition-color duration-100  ">

          <div className="brand"> LOTO </div>
          <ul className="flex">

            <a href="#"><li className="px-6 hover:text-yellow-600 transition-all duration-150">Home</li></a>
            <a href="#"><li className="px-6 hover:text-yellow-600 transition-all duration-150">Productos</li></a>     
            <a href="#"><li className="px-6 hover:text-yellow-600 transition-all duration-150">EZ clasic</li></a> 
            <a href="#"><li className="px-6 hover:text-yellow-600 transition-all duration-150">EZ Under</li></a> 

          </ul>

            <CartWidget />
            
        </header>       
    </div>
  )
}

export default NavBar
