import { Button } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import {AddProduct} from './components/AddProduct';
import Cart from './components/Cart';
import {Routes,Route,Link} from 'react-router-dom';
import  Products  from './components/Products';
function App() {
  return (
    
    <div className="App">
     <Header />
     <Routes>

   <Route path="/add" element={<AddProduct/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/products" element={<Products/>}/>

     </Routes>
    </div>
  );
}

export default App;
