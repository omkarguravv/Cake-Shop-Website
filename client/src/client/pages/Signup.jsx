import React, { useState } from 'react'
// import { Link } from 'react-router-dom';

export const Signup = () => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("")
    const [userEmail, setemail] = useState("")
    const [password, setpassword] = useState("")




    async function registerUser(e) {
        e.preventDefault()

        const res = await fetch("http://localhost:8080/api/signup", {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({
                firstName, lastName, userEmail, password
            })

        })
        const data = await res.json()
        alert(data.message)
    }
    return (
        <>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>

                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Signup </h2>

                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={registerUser}>
                        <input type="hidden" name="remember" value="true" />
                        <div className="-space-y-px rounded-md shadow-sm ">

                            <div >

                                <input id="password" name="password" type="text" autoComplete="current-password" required className="relative block w-full appearance-none  rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="First Name" onChange={(e) => {
                                    setfirstName(e.target.value)
                                }} />
                            </div>
                            <div className='py-4'>

                                <input id="lastName" name="lastName" type="text" autoComplete="current-password" required className="relative block w-full appearance-none  rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Last Name" onChange={(e) => {
                                    setlastName(e.target.value)
                                }} />
                            </div>

                            <div>

                                <input id="email-address" name="email" type="email" autoComplete="email" required className="relative block w-full appearance-none  rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address" onChange={(e) => {
                                    setemail(e.target.value)
                                }} />
                            </div>
                            <div className='py-4'>

                                <input id="email-address1" name="email" type="password" autoComplete="email" required className="  relative block w-full appearance-none  rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password" onChange={(e) => {
                                    setpassword(e.target.value)
                                }} />
                            </div>


                        </div>

                        <div className="flex items-center justify-between">


                            <div className="text-sm">
                                <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
                            </div>
                        </div>

                        <div>
                            {/* <Link to=''>  */}
                                 <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                Sign up
                            </button>
                            {/* </Link> */}


                        </div>
                    </form>
                </div>
            </div>
        </>

    )
}