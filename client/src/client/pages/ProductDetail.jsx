import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import Navbar from '../components/Navbar'

function ProductDetail() {
    return (
        <>
            <Navbar />
            <div className='w-full mt-32  '>
                <div className='  mx-auto flex flex-col justify-center w-full h-full '>


                    <div className='flex  flex-col lg:flex lg:flex-row mx-0 lg:mx-28 '>

                        <div className='w-full    lg:w-1/2 '>

                            <div className='mx-6 lg:mx-20  '>
                                <img className='rounded-md' src="https://media.bakingo.com/pink-strawberry-half-cake-cake2801stra-A.jpg" alt="" />
                            </div>

                            <div className=' hidden ml-20 mt-2'>
                                <p className='font-bold text-lg  leading-loose'>Product Description:</p>
                                <p>The heavenly taste of this Choco Truffle Cake will even leave the hardest-to-please chocolate addicts tranquil in every sense. Prepared with three layers of relishing chocolate cream filled in between the soft stacks of chocolate cake, and adorned with beautiful chocolate icing and rich glaze chocolate coating, this one is just irresistible.</p>
                            </div>
                        </div>

                        <div className='w-full lg:w-1/2 ml-6'>
                            <h3 className='mt-4 lg:mt-0 font-bold text-xl lg:text-4xl '>Round Chocolate Truffle Cake
                            </h3>

                            <div className='flex items-center bg-[#5B9139] w-14 justify-center rounded-md  text-white mt-3 lg:mt-3 '>
                                <AiFillStar color='white' />
                                <p >4.9</p>
                            </div>

                            <div className='flex items-center mt-6  '>
                                <p className='font-bold text-3xl mr-6'>$549</p>
                                <p className='line-through font-thin text-2xl text-slate-400 '>$700</p>
                            </div>

                            <div className='mt-8'>
                                <h4 className='font-semibold text-2xl'>Select Weight</h4>
                                <div className='mt-4'>
                                    <button className='bg-transparent hover:bg-yellow-500 text-black font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded mr-3'>0.5kg</button>
                                    <button className='bg-transparent hover:bg-yellow-500 text-black font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded mr-3'>0.5kg</button>
                                    <button className='bg-transparent hover:bg-yellow-500 text-black font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded mr-3'>0.5kg</button>
                                    <button className='bg-transparent hover:bg-yellow-500 text-black font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded mr-3'>0.5kg</button>

                                </div>
                            </div>

                            <div>
                                <div className='pr-10 lg:pr-0'>
                                    <label for="first_name" className="block mb-2  text-gray-900  font-semibold text-xl mt-8   ">Cake Message</label>
                                    <input type="text" id="first_name" className=" bg-white border border-yellow-300 text-black text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-white dark:border-yellow-600 dark:placeholder-black dark:text-black dark:focus:ring-yellow-500 dark:focus:yellow-blue-500" placeholder="Enter Name on Cake" required />
                                </div>
                            </div>

                            <button className='bg-yellow-300 text-black rounded-md px-10 py-3 text-xl font-extrabold mt-10'>Buy Now</button>

                            <div className='  ml-2 mt-4 mr-6 '>
                                <p className='font-bold text-lg  leading-loose'>Product Description:</p>
                                <p>The heavenly taste of this Choco Truffle Cake will even leave the hardest-to-please chocolate addicts tranquil in every sense. Prepared with three layers of relishing chocolate cream filled in between the soft stacks of chocolate cake, and adorned with beautiful chocolate icing and rich glaze chocolate coating, this one is just irresistible.</p>
                            </div>

                        </div>

                    </div>

















                </div>
            </div>


        </>
    )
}

export default ProductDetail
