import React from 'react'
import { BsFillCartCheckFill } from 'react-icons/bs'

import Navbar from '../components/Navbar'

function Cart() {
  return (
    <>
      <Navbar />
      <div className='w-full pt-32    bg-[#FBFBFD] '>
        <div className='  mx-auto flex flex-col justify-center w-full h-full '>


          <p className='text-left mb-6 mx-28 text-yellow-400 font-extrabold text-xl '>My Cart (2 Items)</p>
          <div className='flex  flex-col lg:flex lg:flex-row mx-0 lg:mx-28 bg-white '>

            <div className='left w-2/3 text-center  flex border  drop-shadow-lg rounded-md'>
              <div className='w-full   '>
                <div className='flex '>
                  <img className='w-2/5 p-10 rounded-md' src="https://media.bakingo.com/pink-strawberry-half-cake-cake2801stra-A.jpg" alt="" />
                  <div className='text-left mt-10'>
                    <p className='font-medium text-2xl'>Pink Strawberry Half Cake</p>
                    <p className='font-bold text-xl mt-6'>$699</p>
                    <p className='mt-4 font-medium text-lg'>Weight <span className='font-bold'>0.5</span> </p>
                    <p className='mt-4 font-medium text-lg  '>Qty <button className='ml-8 bg-yellow-300 text-black font-extrabold text-xl px-2 rounded-md mr-5'> - </button> 1 <button className='bg-yellow-300 text-black px-2 font-extrabold text-xl rounded-md ml-5'> + </button></p>
                  </div>
                </div>

                <div className='flex'>
                  <img className='w-2/5 p-10 rounded-md' src="https://media.bakingo.com/pink-strawberry-half-cake-cake2801stra-A.jpg" alt="" />
                  <div className='text-left mt-10'>
                    <p className='font-medium text-2xl'>Pink Strawberry Half Cake</p>
                    <p className='font-bold text-xl mt-6'>$699</p>
                    <p className='mt-4 font-medium text-lg'>Weight <span className='font-bold'>0.5</span> </p>
                    <p className='mt-4 font-medium text-lg  '>Qty <button className='ml-8 bg-yellow-300 text-black font-extrabold text-xl px-2 rounded-md mr-5'> - </button> 1 <button className='bg-yellow-300 text-black px-2 font-extrabold text-xl rounded-md ml-5'> + </button></p>
                  </div>
                </div>
              </div>




            </div>


            <div className='right h-40  w-1/3 px-3 bg-white ml-6 boder drop-shadow-lg rounded-md  '>

              <p className='text-left font-bold text-xl mt-3'>Order Summary</p>

              <div className='flex justify-between items-center   '>
                <p className='font-medium mt-3'>Total</p>
                <p className='font-bold text-2xl'>$799</p>
              </div>

              <button className=' mt-6 w-full font-extrabold  flex items-center bg-yellow-300 text-black  justify-center py-3 rounded-lg '>
                <BsFillCartCheckFill />
                place order</button>

            </div>


          </div>




        </div>
      </div>
    </>
  )
}

export default Cart
