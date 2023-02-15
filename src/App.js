import './App.css';
import Header from './Header/Header';
import Body from './Body/Body';
import { Link, Route, Routes } from 'react-router-dom';
import ProductDetails from './Body/ProductDetails';
import Home from './Home/Home';
import { useState } from 'react';


function App() {
  const [productItem , setProductItem] = useState(null)
  function detailProduct(detail) {
    setProductItem(detail)
    console.log("aaa", detail)
  }
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Body onProductClick={detailProduct}/>} />
        <Route path="/products/:id" element={<ProductDetails detailItem={productItem}/>} />
      </Routes>
      
    </div>
  );
}

export default App;
