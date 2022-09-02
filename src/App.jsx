import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  const greeting = prompt("Hola, escribe tu nombre")

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={greeting} />

    </div>
  );
}

export default App;
