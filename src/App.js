import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './components/ItemsListContainer/ItemsListContainer';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path="/" element={ <ItemListContainer /> }/>
        <Route path="/productos/:categoryId" element={ <ItemListContainer /> }/>
        <Route path="/detail/:itemId" element={ <ItemDetailContainer />} />
        <Route path="*" element={ <Navigate to={"/"}/> }/>
        
      </Routes>  


    </BrowserRouter>
      
  );
}

export default App;