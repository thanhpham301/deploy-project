import './App.css';
import Header from './components/Header/Header';
import ProductPage from './pages/Product/ProductPage';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './components/Product/ProductDetails';
import HomePage from './pages/Home/HomePage';
import Cart from './components/Cart';
import { useState, useEffect } from 'react';
import Adminpage from './pages/Admin/Adminpage';
import { data } from './data/Shoes';
import { ProductContext } from './data/ProductContext';
import { dataCategory, dataGender, dataSize } from './data/Cat-Gen-Size';
import RegisterPage from './pages/Register/Register';

function App() {
  const [product, setProduct] = useState(data)
  const [category, setCategory] = useState(dataCategory)
  const [gender, setGender] = useState(dataGender)
  const [size, setSize] = useState(dataSize)
  const [productItem , setProductItem] = useState(null)
  const [cart, setCart] = useState([])
  const [searchProduct, setSearchProduct] = useState([])
  const [registered, setRegistered] = useState([])
  const [numberLengthProduct, setNumberLengthProduct] = useState("")

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('dataStorage'))
    if (storedData) {
      setProduct(storedData)
    }
  }, [])
  useEffect(() => {
    const storedCategory = JSON.parse(localStorage.getItem('categoryStorage'))
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
    }
  }, [])
  
  
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
    const productDataCart = JSON.parse(localStorage.getItem('cartStorage'))
    console.log(productDataCart)
    if(productDataCart) {
      setCart([...productDataCart, product])
      localStorage.setItem('cartStorage', JSON.stringify([...productDataCart, {...product, qty: 1}]))
    } else {
      setCart([...cart, product])
      localStorage.setItem('cartStorage', JSON.stringify([...cart, {...product, qty: 1}]))

    }
    
  }
  console.log(cart)

  
  function delProduct(itemDeleted){
    const productDataCart = JSON.parse(localStorage.getItem('cartStorage')).filter((item,idx) => idx !== itemDeleted)
    setCart([...productDataCart])
    localStorage.setItem('cartStorage', JSON.stringify([...productDataCart]))
  }
  function deletedData(item) {
    setProduct(prev => prev.filter(i => i.id !== item))
    localStorage.setItem('dataStorage', JSON.stringify(product.filter(element => element.id !== item)))
  }
  return (
    <div>
      <ProductContext.Provider value={{numberLengthProduct, setNumberLengthProduct, product, category, cart, gender, size, searchProduct, setSearchProduct,registered, setRegistered}}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/products" element={<ProductPage onProductClick={detailProduct} />} />
          <Route path="/products/:id" element={<ProductDetails detailItem={productItem}  cart={cartProduct}/>} />
          <Route path="/cart" element={<Cart  deleteCart={delProduct}/>} />
          <Route path="/admin" element={<Adminpage addProduct={addProduct} deletedData={deletedData}/>} />
          <Route path="*" element={<h1>Page not found</h1>}/>
        </Routes>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
