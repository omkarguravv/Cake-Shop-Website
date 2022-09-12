import React from 'react'
import Navbar from '../components/Navbar'
import Cake from '../../assets/cake2.png'
import { Button } from '../components/Button'

export const Homepage = () => {
  return (
    <>
      <Navbar />

      <div className='w-full h-screen bg-gradient-to-br from-blue-600 to-blue-100 text-white '>
        <div className='max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full px-4'>

          <div className='flex flex-row items-center'>


            <div>
              <h3 className='font-extrabold text-4xl ' >Delicious cakes to order</h3>
              <p className='py-3 text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad quas nihil obcaecati!</p>
              <Button name='Choose Cake' />

            </div>



            <div>
              <img src={Cake} alt="" width={530} />
            </div>
          </div>
        </div>
      </div>

    </>

  )
}


// div 1 w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white
// div 2 max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full 