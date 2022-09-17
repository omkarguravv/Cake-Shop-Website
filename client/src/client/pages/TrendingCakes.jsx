import React from 'react'
import TrendingCakesData1 from '../../Data/TrendingCakeData.json'

export const TrendingCakes = () => {

    return (
        <>
            <div className='w-full h-screen  bg-[#FEFEFF] text-black'>
                <div className='max-w-screen-lg  mx-auto  justify-center w-full h-full '>

                    <div className='text-center font-custom md:text-4xl text-2xl md:py-4 '>Trending Cakes</div>
                    <div className='md:px-6 grid  sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-y-4 gap-x-12 px-12  sm:px-0 ' >

                        {TrendingCakesData1.map(data => {
                            return (
                                <div key={data.id} className="bg-white md:w-52  md:h-60   rounded-lg  shadow-lg hover:border-amber-400 hover:border-4 duration-400 ease-in-out items-center ">
                                    <img className="mx-auto h-48 mt-4 lg:mt-0  md:pt-2 lg:pt-4 rounded items-center  " src={data.src} alt="Wow cakes" />
                                    <p className=' text-center font-bold lg:mt-5 md:mt-2  '>{data.name}</p>
                                </div>
                            )
                        })}

                    </div>

                </div>
            </div>
        </>
    )
}



