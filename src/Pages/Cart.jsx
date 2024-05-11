import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from "../components/CartItem"

function Cart() {

    const { cart } = useSelector((state) => state)
    const [totalAmount, setTotalAmount] = useState(0)

    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0))
    }, [cart])

  return (
    <div>
        {
          cart.length > 0 ? (
              <div className='flex flex-col md:flex-row'>
                  <div className='cart-item lg:w-3/5 md:overflow-scroll md:h-[92vh] md:overflow-x-hidden px-8'>
                      {
                          cart.map((item, index) => {
                              return <CartItem key={item.id} {...item} />
                          })
                      }
                  </div>
                  
                  <div className='lg:w-2/5 px-4 md:px-0 flex flex-col justify-between py-8'>
                      <div className='md:pl-12 px-8'>
                          <h2 className='text-green-800 font-semibold md:text-5xl text-3xl'> Your cart </h2>
                          <p className='text-green-800 font-semibold md:text-7xl text-6xl'>Summary</p>
                          <p className='font-semibold'>Total items: <span className='font-bold'> {cart.length} </span> </p>                        
                      </div>
                  
                      <div className='md:pl-12 px-8'>
                        <p className='text-left mb-8 text-lg'>
                            Total Amount: <span className='font-bold'>₹ {totalAmount} </span>
                        </p>
                        
                        <button className='bg-green-700 text-white font-semibold py-2 px-4 w-full md:w-4/5 rounded-2xl'>
                            Checkout Now
                        </button>
                      </div>
                  </div>  
              </div>
          ) : (
              <div className='flex items-center justify-center h-[90vh] overflow-hidden'>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-4xl text-green-600 font-bold my-8 text-center'>
                                Cart Empty
                    </h1>

                    <Link to={'/'}>
                        <button className='px-4 py-2 text-lg font-semibold bg-green-800 text-white rounded-lg'>
                            Shop Now
                        </button>
                    </Link>
                </div>
              </div>
          )
        }
    </div>
  )
}

export default Cart
