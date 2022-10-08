import React from 'react'

function Navbar() {
    return (
        <>


            <nav className=' w-full flex h-16  bg-gradient bg-[#FEFEFF]  p-5  shadow-md '>
                <a className='w-1/2 ' href="/admin"><div className='text-lg font-bold flex'>Admin DashBoard</div></a>


                <div className='w-1/2  text-right space-x-6   '>
                    <a href="/admin/signin">Signin</a>
                    <a href="/admin/signup">Signup</a>
                </div>

            </nav>

        </>
    )
}

export default Navbar
