import React from 'react'
import { AiFillDelete } from "react-icons/ai"
import { useDispatch } from 'react-redux'
import { toast } from "react-toastify"
import { remove } from "../store/slices/CartSlice"


function CartItem({
    images,
    description,
    title,
    price,
    id
}) {

    const dispatch = useDispatch()

    const removeFromCart = () => {
      dispatch(remove(id))
      toast.error("Item removed from cart.")
    }

  return (
    <div className='flex h-[250px] border-b-2 border-solid border-gray-400 my-8'>
      
      <div className='w-2/5 flex items-center justify-center'>
        <img src={`${images[0]}`} alt="" className='md:w-[200px] w-full h-40 md:h-60' />
      </div>
      
      <div className='w-3/5 h-full flex flex-col justify-between'>

        <div>
          
          <h1 className='font-bold text-xl'>
            {title}
          </h1>

          <p className='text-sm text-gray-600 font-semibold'>
            {description.split(' ').splice(0, 20).join(' ') + "..."}
          </p>
        </div>

        <div className='flex justify-between w-full px-4 py-2'>
          
          <p className='text-green-600 font-bold text-lg'>
            ₹{price}
          </p>

          <button 
            onClick={removeFromCart}
            className='text-red-600 h-12 w-12 bg-red-300 rounded-full flex items-center justify-center text-2xl hover:bg-red-400'>
              <AiFillDelete />
          </button>


        </div>
      </div>
    </div>
  )
}

export default CartItem
