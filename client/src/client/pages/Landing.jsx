import React from 'react'
import Cake from '../../assets/cake2.png'
import { Button } from '../components/Button'
const Landing = () => {
  return (
    <>
     <div className='w-full h-screen bg-gradient-to-brbg-[#FEFEFF]  text-black '>
        <div className='max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full px-4'>
          <div className='flex flex-row items-center'>
            <div>
              <h3 className=' font-custom font-extrabold text-4xl ' >Delicious cakes to order</h3>
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

export default Landing
