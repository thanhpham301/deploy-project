import './App.css';
import Header from './components/Header/Header';
import ProductPage from './pages/Product/ProductPage';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './components/Product/ProductDetails';
import HomePage from './pages/Home/HomePage';
import Cart from './components/Cart';
import { useState, useRef } from 'react';


function App() {
  const [productItem , setProductItem] = useState(null)
  let debug = useRef([])
  const [cart, setCart] = useState([])
  function detailProduct(detail) {
    setProductItem(detail)
  }
  function cartProduct(product) {
    
    debug.current.push(product)
    setCart(debug.current)
    
  }
  
  function delProduct(itemDeleted){
    debug.current = debug.current.filter((item, idx) => idx !== itemDeleted)
    setCart(debug.current)
  }
  
  return (
    <div>
      <Header cart={cart}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage onProductClick={detailProduct} />} />
        <Route path="/products/:id" element={<ProductDetails detailItem={productItem} cart={cartProduct}/>} />
        <Route path="/cart" element={<Cart cart={cart} deleteCart={delProduct}/>} />
      </Routes>
      
    </div>
  );
}

export default App;
