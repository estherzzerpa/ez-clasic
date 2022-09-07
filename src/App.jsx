import './App.css';
import NavBar from './components/header/NavBar';
import ItemListContainer from './components/main/ItemListContainer';

function App() {

  const descuento = "20% OFF"

  return (
    <div className="App h-[100vh]">
      <NavBar />
      <ItemListContainer greeting={descuento} />
    </div>

  );
}

export default App;
