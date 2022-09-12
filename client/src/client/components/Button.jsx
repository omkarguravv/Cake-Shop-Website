import React from 'react'

export const Button = (props) => {
  return (
    <div>
      <button className='md:ml-4 py-2 px-6  rounded-full duration-500 bg-white hover:bg-blue-700 text-black hover:text-white'>
        {props.name}
      </button>
    </div>
  )
}

