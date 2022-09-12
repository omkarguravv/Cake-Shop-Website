import React from 'react'
import { useState } from 'react'
import { Button } from './Button';
import { GiCupcake } from 'react-icons/gi'
import { HiOutlineViewList } from 'react-icons/hi'
import { MdClose } from "react-icons/md"

import {Link} from 'react-router-dom'


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
            <div className='shadow-md  w-full fixed top-0 left-0 '>
                <div className='md:flex items-center justify-between bg-gradient from-blue-500 to-blue-100 py-4 md:px-10 px-7'>
                    <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-white'>
                        <span className='text-3xl text-white mr-1 pt-2'>
                            <GiCupcake size={50} />
                        </span>
                        Wow Cakes
                    </div>

                    <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                        {open ? <MdClose /> : <HiOutlineViewList />}



                    </div>

                    <ul className={` bg-blue-400
                      
                       pb-12 absolute h-screen   z-[-1] left-0 w-full   pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-890px]'}`}>
                        {
                            Links.map((link) => (
                                <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                                    <a href={link.link} className='text-white hover:text-gray-800  duration-500 capitalize'>{link.name}</a>
                                </li>
                            ))
                        }
                        <Link to='/signup' ><Button name='SignIn' /></Link>



                    </ul>

                    <ul className={`hidden md:flex md:items-center 
                     md:from-blue-500 md:to-blue-100
                       md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1]  md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-16 ' : 'top-[-490px]'}`}>
                        {
                            Links.map((link) => (
                                <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                                    <a href={link.link} className='text-white hover:text-gray-800  duration-500 capitalize'>{link.name}</a>
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
