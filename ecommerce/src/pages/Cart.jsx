import React, { useContext } from 'react';
import productContext from '../context/ProductContext';

const Cart = () => {
  const { cart, removeFromCart } = useContext(productContext);

  return (
    <div className='lg:w-[70vw] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 justify-center items-center mb-10'>
    {/* if there is no product show me h1 tage else show me product */}
      {cart.length == "" ? (<h1 className='font-bold w-[80vw] text-center'>Nothing to show</h1>
      ):
        cart.map((product) => (
        <div
          key={product.id}
          className='bg-gray-100 mx-auto w-[80vw] lg:w-[20vw] rounded-md overflow-hidden shadow-md'
        >
          <img
            src={product.thumbnail}
            alt=''
            className='rounde-md rounded-bl-none rounded-br-none hover:scale-105 transition-all w-full h-[200px]'
          />
          <div className='p-2'>
            <h2 className='font-bold uppercase text-gray-600'>{product.title}</h2>
            <p className='text-xs'>{product.description}</p>
            <div className='flex justify-between items-center my-1'>
              <span className='font-bold text-gray-600'>price: ${product.price}</span>
              <button
                 onClick={() => removeFromCart(product)}
                className='bg-gray-700 hover:bg-white hover:text-gray-700 border-2 border-transparent hover:border-gray-700 text-white font-bold px-3 rounded-md'
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
