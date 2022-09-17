import React from 'react'
import Navbar from '../components/Navbar'
import Landing from './Landing'
import Designer from './Designer'
import { TrendingCakes } from './TrendingCakes'

export const Homepage = () => {
  return (
    <>
      <Navbar />
      <Landing />

      {/* <Designer/> */}
      <TrendingCakes />
    </>
  )
}


// div 1 w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white
// div 2 max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full 