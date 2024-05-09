import React, {useState} from 'react'
import { useSelector, useDispatch } from "react-redux"
import { add} from "../store/slices/CartSlice"
import { toast } from "react-toastify"
import { NavLink } from "react-router-dom"
import ImageCarousel from "./ImageCarousel"
import Loadingbar from "react-top-loading-bar"

function Product( { post } ) {

  const [progress, setProgress] = useState(0)

  const { title, description, images, price, id } = post
  
  const { cart } = useSelector((state) => state)

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(post))
    toast.success("Item added to cart")
  }

  const removeFromCart = () => {
    setProgress(100)
    
  }

  return (
    <div className='w-full shadow-[rgba(17,_17,_26,0.1)_0px_0px_16px] rounded-md flex flex-col items-center hover:scale-105 transition duration-300 ease-in px-6'>
      <Loadingbar color='#ffffff' progress={progress} onLoaderFinished={() => setProgress(0)} />
      <div className='font-bold text-2xl h-20 break-all text-gray-700 py-2'>
        <h1>
          {title.split(' ').splice(0, 4).join(' ') + "..."}
        </h1>
      </div>
      <div className='w-40 h-16 text-gray-400 text-xs'>
          <p>
            {description.split(' ').splice(0, 10).join(' ') + "..."}
          </p>
      </div>

      <ImageCarousel image={images} />

      <div className='flex justify-between w-full py-4 px-2 justify-self-end'>
        <div className='bg-green-800 font-bold text-white px-2 py-0.5 rounded-3xl'>
          <p>
            ₹ {price}
          </p>
        </div>

        {
          cart.some((p) => p.id == id) 
                ? 
            <NavLink to='/cart'>
              <button 
                className='border-2 border-solid border-black px-2 rounded-3xl hover:bg-sky-800 hover:text-white font-semibold text-center flex'
                onClick={removeFromCart}>
                Go to cart
              </button>
            </NavLink> 
                : 
            <button className='border-2 border-solid border-black px-2 rounded-3xl hover:bg-green-800 hover:text-white font-semibold text-center flex'
              onClick={addToCart}>
                  Add to cart
            </button>
        }

      </div>
    </div>
  )
}

export default Product