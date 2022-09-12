import React,{useState}from "react";

function Signup() {
    const[firstName , setfirstName] = useState("");
    const[lastName , setlastName] = useState("")
    const [userEmail,setemail] = useState("")
    const [password,setpassword] = useState("")

   
    async function registerUser (e) {
        e.preventDefault()
        
         const res = await fetch("http://localhost:8080/api/signup" , {
            method: 'POST',
            headers:{
             'Content-Type': "application/json",
            },
            body:JSON.stringify({
                firstName, lastName , userEmail , password
            })

        })
        const data  = await res.json()
        console.log(data)
   }
    return (<>
        <div className="">
            <div className="flex flex-wrap flex-col justify-center items-center mt-44 ">
                <div>
                    <h1 className="text-3xl">Sign in to your account</h1>
                    <p className="text-center">or <a href="/">register your account</a></p>
                </div>
                <div className="bg-gray-300 w-96">
                    <form onSubmit={registerUser}>
                        <div className=" mt-4 mb-10 flex flex-col items-center ">
                            <label htmlFor="">Email address</label>
                            <input type="text" placeholder=" First Name " className=" w-72 h-10 text-lg mb-10 rounded-md" onChange={(e)=>{
                                setfirstName(e.target.value)
                            }}/>
                            <input type="text" placeholder=" Last Name" className="w-72 h-10 text-lg mb-10 rounded-md" onChange={(e)=>{
                                setlastName(e.target.value)
                            }} />
                            <input type="text" placeholder="Email" className="w-72 h-10 text-lg mb-10 rounded-md"
                            onChange={(e)=>{
                                setemail(e.target.value)
                            }}/>
                            <input type="password" placeholder="Password" className="w-72 h-10 text-lg  rounded-md" onChange={(e)=>{
                                setpassword(e.target.value)
                            }}/>
                            
                        </div>
                        <div className="flex justify-center">
                            <input type="submit" name="Login" className="bg-[#f45f] w-20 h-10 rounded-xl" />
                        </div>


                    </form>
                </div>
            </div>




        </div>

    </>);
}
export default Signup;