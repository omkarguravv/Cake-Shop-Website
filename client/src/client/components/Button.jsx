import React from 'react'

export const Button = (props) => {
  return (
    <div>
      <button className='hover:scale-110  md:ml-4 py-2 px-6  rounded-full duration-500 hover:bg-[#F3C623] bg-[#FFE229] text-black hover:text-black'>
        {props.name}
      </button>
    </div>
  )
}

