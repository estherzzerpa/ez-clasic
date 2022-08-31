
const Header = () => {

  return (

    <div className="text-black font-bold">

        <header className="flex bg-gradient-to-r from-gray-100 to-gray-500 hover:from-gray-500 hover:to-gray-200 h-12  justify-around items-center hover:transition-all delay-150 shadow-sm">
             <div className="brand"> EZ</div>

              <ul className="flex ">
                <a href="#"><li className="px-6">Home</li></a>
                <a href="#"><li className="px-6">Productos</li></a>     
                <a href="#"><li className="px-6">EZ clasic</li></a> 
                <a href="#"><li className="px-6">EZ Under</li></a> 
              </ul>
              
        </header>       
    </div>
  )
}

export default Header
