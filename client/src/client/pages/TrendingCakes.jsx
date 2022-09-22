import React from 'react'
import TrendingCakesData1 from '../../Data/TrendingCakeData.json'

export const TrendingCakes = () => {

    return (
        <>
             <div className='w-full h-screen bg-gradient[#FFFF] text-black mt-16 md:mt-0 '>
                <div className='max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full '>
                    <div className="text-center text-3xl md:text-4xl my-10 font-custom "><h1>Trending Cake</h1></div>
                    <div className="grid gap-10 grid-cols-2 lg:grid-cols-4 md:grid-cols-3 px-4 ">
                        {TrendingCakesData1.map(data => {
                            return (
                                <div key={data.id} className="bg-white md:w-52  md:h-60   rounded-lg  shadow-lg hover:border-amber-400 hover:border-4 duration-400 ease-in-out items-center ">
                                    <img className="mx-auto h-36 px-4 md:h-48 mt-4 lg:mt-0  md:pt-2 lg:pt-4 rounded items-center  " src={data.src} alt="Wow cakes" />
                                    <p className=' text-center text-sm font-bold   md:font-bold lg:mt-5 md:mt-2  '>{data.name}</p>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </>
    )
}



