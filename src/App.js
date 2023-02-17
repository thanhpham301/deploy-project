import './App.css';
import Header from './components/Header/Header';
import ProductPage from './pages/Product/ProductPage';
import { Link, Route, Routes } from 'react-router-dom';
import ProductDetails from './components/Product/ProductDetails';
import HomePage from './pages/Home/HomePage';
import Cart from './components/Cart';
import { useState } from 'react';


function App() {
  const [productItem , setProductItem] = useState(null)
  const [cart, setCart] = useState(null)
  const [delItem, setDelItem] = useState("null")
  function detailProduct(detail) {
    setProductItem(detail)
    console.log("aaa", detail)
  }
  function cartProduct(product) {
    setCart(product)
    console.log("cart",cart)
  }
  function delProduct(itemDeleted){
    setDelItem(itemDeleted)
    console.log(itemDeleted)
  }
  return (
    <div>
      <Header cart={cart}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage onProductClick={detailProduct} />} />
        <Route path="/products/:id" element={<ProductDetails detailItem={productItem} cart={cartProduct} order={delItem} />} />
        <Route path="/cart" element={<Cart cart={cart} deleteCart={delProduct}/>} />
      </Routes>
      
    </div>
  );
}

export default App;
