import React,{ useEffect, useState, useContext} from 'react'
import { PulseLoader } from 'react-spinners';

import productContext from '../context/ProductContext';

// {products,setProducts}
const Home = () => {
  const[loading,setLoading] = useState(true);

  // context api--
  const {products, setProducts, addToCart } = useContext(productContext)


  // I TRY TO LOAD THE PAGE IN 1 TIME SHOW I USE [] 
  useEffect(()=>{
  getProducts();
  },[])
  const getProducts = async()=>{
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products);
    setLoading(false);
    // console.log(data);
  };


  return (
    <div className='lg:w-[70vw] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 justify-center items-center mb-10'>
    {loading ? (
      <div className='w-[70vw] h-[80vh] flex justify-center items-center border-2'>
      <PulseLoader color="#36d7b7" />
      </div>
    ):(
      products.map((product)=>{
        return(
          <div key={product.id} className='bg-gray-100 mx-auto w-[80vw] lg:w-[20vw] rounded-md overflow-hidden shadow-md'>
      <img src={product.thumbnail}
       alt=''
        className='rounde-md rounded-bl-none rounded-br-none hover:scale-105 transition-all w-full h-[200px]'
       />
       <div className='p-2'>
       <h2 className='font-bold uppercase text-gray-600'>{product.title}</h2>
        <p className='text-xs '>
        {product.description}
        </p>
        <div className='flex justify-between items-center my-1'>
        <span className='font-bold text-gray-600'>price : ${product.price}</span>
        <button 
        onClick={()=>addToCart(product)}
        className='bg-gray-700 hover:bg-white hover:text-gray-700 border-2 border-transparent hover:border-gray-700 text-white font-bold px-3 rounded-md'>
        Add to Cart</button>
        </div>
       </div>
      </div>
        )
      })
    )}
  </div>
  )
}

export default Home