import './App.css';
import Header from './Header/Header';
import Body from './Body/Body';
import { Link, Route, Routes } from 'react-router-dom';
import ProductDetails from './Body/ProductDetails';
import Home from './Home/Home';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Body />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
      
    </div>
  );
}

export default App;
