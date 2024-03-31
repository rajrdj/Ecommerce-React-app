import React,{useState,useContext} from 'react';
import {Link} from 'react-router-dom';
import productContext from '../context/ProductContext';

// {setProducts}
const Navbar = () => {

  const [searchValue, setSearchValue] = useState(" ");
  // context
  const {setProducts, cart} = useContext(productContext);

  const searchProducts = async()=>{
    const response = await fetch(`https://dummyjson.com/products/search?q=${searchValue}`);
    const data = await response.json();
    setProducts(data.products);
    console.log(data);
  };
  return (
    <nav className='flex justify-evenly align-cente shadow-md p-3 mb-5'>
    <h3 className='font-extrabold text-2xl'>Project1</h3>
    <div>
        <input type='search' name='' id='' placeholder='search Here..' 
        onChange={(e)=>setSearchValue(e.target.value)} 
        className='outline-none border-2 px-3 py-1 rounded-ms w-[45vw] hover:border-purple-300 '/>
        <button onClick={searchProducts} className='px-3 py-1 text-white bg-gray-500  rounded-md ml-2'>search</button>
    </div>
    <ul className='flex gap-5 text-xl font-bold'>
        <Link to="/" className='text-black hover:text-gray-400'>Home</Link>
        <Link to="/cart" className='text-black hover:text-gray-400'>
        Cart {!cart.length ? "" : `(${cart.length})`}
        </Link>

    </ul>
    </nav>
  )
}

export default Navbar