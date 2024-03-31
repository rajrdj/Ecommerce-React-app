import React,{useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
// import context
import productContext from './context/ProductContext';
const App = () => {
  // state
  const [products, setProducts] = useState([]);
  const[cart, setCart] = useState([]);

  const addToCart = (product)=>{
    setCart([...cart, product]);
    // console.log(cart);
    alert('product added to cart')
  };

  const removeFromCart = (product)=>{
    const newCart = cart.filter((item)=> item.id === product.id);
    setCart(newCart);
    alert('product remove from card')
  }



  return (
    <>
    <productContext.Provider value={{products,setProducts, cart, addToCart,removeFromCart}}>
    <BrowserRouter>
    <Navbar /> 
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </BrowserRouter>
    </productContext.Provider>
    </>
  )
}

export default App