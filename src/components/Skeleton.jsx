import React from 'react'
import "./Skeleton.css"

function Skeleton() {
  return (
    <>
      <div className='h-96 w-64 shadow-[rgbe(17,_17,_26,_0.1)_0px_0px_16px] px-4'>
        <div>
          <div className='animated-bg h-6 m-2 rounded-lg'></div>
          <div className='animated-bg h-6 m-2 rounded-lg'></div>
        </div>

        <div className='flex flex-col items-center'>
          <div className='animated-bg h-2 m-1 rounded-lg w-1/2'></div>
          <div className='animated-bg h-2 m-1 rounded-lg w-1/2'></div>
          <div className='animated-bg h-2 m-1 rounded-lg w-1/2'></div>
          <div className='animated-bg h-2 m-1 rounded-lg w-1/2'></div>
        </div>

        <div>
          <div className='animated-bg h-[180px] rounded-lg'></div>
        </div>

        <div className='flex justify-between w-full mt-6'>
          <div className='w-12 animated-bg h-6'></div>
          <div className='w-20 animated-bg h-6'></div>
        </div>

      </div>
    </>
  )
}

export default Skeleton
