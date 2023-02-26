import './App.css';
import Header from './components/Header/Header';
import ProductPage from './pages/Product/ProductPage';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './components/Product/ProductDetails';
import HomePage from './pages/Home/HomePage';
import Cart from './components/Cart';
import { useState, useRef, useEffect } from 'react';
import Adminpage from './pages/Admin/Adminpage';
import { data } from './data/Shoes';
import { ProductContext } from './data/ProductContext';
import { dataCategory, dataGender, dataSize } from './data/Cat-Gen-Size';

function App() {
  const [product, setProduct] = useState(data)
  const [category, setCategory] = useState(dataCategory)
  const [gender, setGender] = useState(dataGender)
  const [size, setSize] = useState(dataSize)
  const [productItem , setProductItem] = useState(null)
  const [cart, setCart] = useState([])
  const [searchProduct, setSearchProduct] = useState([])
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('dataStorage'))
    if (storedData) {
      setProduct(storedData)
    }
  }, [])
  useEffect(() => {
    const storedCategory = JSON.parse(localStorage.getItem('catogoryStorage'))
    if (storedCategory) {
      setCategory(storedCategory)
    }
  }, [])
  useEffect(() => {
    const storedSize = JSON.parse(localStorage.getItem('sizeStorage'))
    if (storedSize) {
      setSize(storedSize)
    }
  }, [])
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cartStorage'))
    if (storedCart) {
      setCart(storedCart)
      debug.current = storedCart
    }
  }, [])
  
  
  let debug = useRef([])
  function addProduct(item) {
    setProduct([...product, item])
    localStorage.setItem('dataStorage', JSON.stringify([...product, item]))
    setCategory([...new Set([...category, item.category])])
    localStorage.setItem('categoryStorage', JSON.stringify([...new Set([...category, item.category])]))
    setSize([...new Set([...size, ...item.size])])
    localStorage.setItem('sizeStorage', JSON.stringify([...new Set([...size, ...item.size])]))
    setGender(dataGender)
  }

  function detailProduct(detail) {
    setProductItem(detail)
  }

  function cartProduct(product) {
    debug.current.push(product)
    setCart([...debug.current])
    localStorage.setItem('cartStorage', JSON.stringify([...debug.current]))

  }
  function newCart(cart) {
    debug.current = cart
    setCart([...debug.current])
    localStorage.setItem('cartStorage', JSON.stringify([...debug.current]))
  }
  
  function delProduct(itemDeleted){
    debug.current = debug.current.filter((item, idx) => idx !== itemDeleted)
    setCart([...debug.current])
    localStorage.setItem('cartStorage', JSON.stringify([...debug.current]))
  }
  function deletedData(item) {
    setProduct(prev => prev.filter(i => i.id !== item))
    localStorage.setItem('dataStorage', JSON.stringify(product.filter(element => element.id !== item)))
  }
  return (
    <div>
      <ProductContext.Provider value={{product, category, gender, size, searchProduct, setSearchProduct}}>
        <Header cart={cart}/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage onProductClick={detailProduct} />} />
          <Route path="/products/:id" element={<ProductDetails detailItem={productItem}  cart={cartProduct}/>} />
          <Route path="/cart" element={<Cart cart={cart} newCart={newCart} deleteCart={delProduct}/>} />
          <Route path="/admin" element={<Adminpage addProduct={addProduct} deletedData={deletedData}/>} />
          <Route path="*" element={<h1>Page not found</h1>}/>
        </Routes>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
