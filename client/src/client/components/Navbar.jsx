import React from 'react'
import { useState } from 'react'
import { Button } from './Button';
import { GiCupcake } from 'react-icons/gi'
import { HiOutlineViewList } from 'react-icons/hi'
import { MdClose } from "react-icons/md"

import { Link } from 'react-router-dom'


const Navbar = () => {
    let Links = [
        { name: "home", link: "/" },
        { name: "service", link: "/" },
        { name: "about", link: "/" },
        { name: "contact", link: "/" },
    ];
    let [open, setOpen] = useState(false);
    return (
        <>
            <div className=' z-50 shadow-md  w-full fixed top-0 left-0 '>
                <div className='md:flex items-center justify-between bg-gradient bg-[#FEFEFF] py-4 md:px-10 px-7'>
                    <div className=' font-custom font-bold text-2xl cursor-pointer flex items-center 
      text-black'>
                        <span className='text-3xl text-pink-800 mr-1 pt-2'>
                            <GiCupcake size={50} />
                        </span>
                        <div className='tracking-widest '>

                            Wow Cakes
                        </div>
                    </div>

                    <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                        {open ? <MdClose /> : <HiOutlineViewList />}



                    </div>

                    <ul className={`flex items-center justify-center flex-col
                      bg-[#e7e7ef] text-center font-bold  
                        absolute h-screen   z-[-1] left-0 w-full transition-all duration-1000  ease-in ${open ? 'top-1   ' : 'top-[-830px]'}`}>
                        {
                            Links.map((link) => (
                                <li key={link.name} className='duration-300 ease-in md:ml-8 text-xl md:my-0 my-7'>
                                    <a href={link.link} className=' text-gray-800   duration-500 capitalize'>{link.name}</a>
                                </li>
                            ))
                        }
                        <Link to='/signin' ><Button name='SignIn' /></Link>



                    </ul>

                    <ul className={` hidden md:flex md:items-center 
                     md:from-blue-500 md:to-blue-100
                       md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1]  md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in `}>
                        {
                            Links.map((link) => (
                                <li key={link.name} className='hover:scale-110 duration-300 ease-in-out  md:ml-8 text-xl md:my-0 my-7'>
                                    <a href={link.link} className='hover:text-black  text-gray-800  duration-500 capitalize'>{link.name}</a>
                                </li>
                            ))
                        }
                        <Link to='/signup' ><Button name='SignIn' /></Link>




                    </ul>
                </div>
            </div>


        </>
    )
}

export default Navbar
