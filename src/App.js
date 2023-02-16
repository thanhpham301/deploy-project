import './App.css';
import Header from './Header/Header';
import Body from './Body/Body';
import { Link, Route, Routes } from 'react-router-dom';
import ProductDetails from './Body/ProductDetails';
import Home from './Home/Home';
import Cart from './Body/Cart';
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
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Body onProductClick={detailProduct} />} />
        <Route path="/products/:id" element={<ProductDetails detailItem={productItem} cart={cartProduct} order={delItem} />} />
        <Route path="/cart" element={<Cart cart={cart} deleteCart={delProduct}/>} />
      </Routes>
      
    </div>
  );
}

export default App;
