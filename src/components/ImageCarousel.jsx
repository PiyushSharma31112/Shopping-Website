import React, { useState } from 'react'
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai"

function ImageCarousel({ image }) {

    const [move, setmove] = useState(0)
    const [count, setCount] = useState(1)

    const maxLength = image.length

    function moveRight() {
      if (count < maxLength) {
        setmove( move - 212 )
        setCount( count + 1 )
      }
    }

    function moveLeft () {
      if (count > 1) {
        setmove(move + 212)
        setCount(count - 1)
      }
    }

    const customStyle = {
      transform: `translateX(${move}.px)`
    }

  return (
    
    <div className='h-[210px] overflow-hidden relative'>

      <div className={`flex transition-all duration-300`} style={customStyle}>
        <img src={`${image[0]}`} alt="" />
        <img src={`${image[1]}`} alt="" />
        <img src={`${image[2]}`} alt="" />
      </div>

      <button className='z-40 absolute top-1/2 left-4 -translate-y-1/2 w-10 aspect-square bg-[rgbe(255, 255, 255, 0.5)] flex items-center justify-center rounded-full'>
        <AiOutlineLeft onClick={moveLeft} /> 
      </button>

      <button className='z-40 absolute top-1/2 left-4 -translate-y-1/2 w-10 aspect-square bg-[rgbe(255, 255, 255, 0.5)] flex items-center justify-center rounded-full'>
        <AiOutlineRight onClick={moveRight} /> 
      </button>

    </div>
  )
}

export default ImageCarousel
