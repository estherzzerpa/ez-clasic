import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  const nombre = prompt("Hola, escribe tu nombre")


  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={nombre} />

    </div>
  );


}

export default App;
