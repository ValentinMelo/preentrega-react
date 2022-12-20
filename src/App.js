import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer';

function App() {
  return (
    <>
    <NavBar/>
    <ItemsListContainer name='Bienvenidos a React Clothing'/>
    </>
  );
}

export default App;