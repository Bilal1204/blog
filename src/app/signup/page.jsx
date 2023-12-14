"use client";
import React,{useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const Signup = () => {
    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        password: ''
    });

    const router = useRouter();

    const handleSignup = async () => {    
        try {
            // console.log({user})
            const res = await axios.post('/api/signup', user)
            // console.log(res.data)
            router.push('/')
        } catch (error) {
            console.log(error)
        }

    }

  return (
    <div className='grid grid-cols-12 h-screen bg-neutral-800'>
      
      <div className='col-span-4 relative'>
        <img className='absolute inset-0 object-cover w-full h-full' src='/bgimage.png'/>
        <div className="w-[100vh] h-screen left-[100%] absolute origin-top-left rotate-90 border-t-4  border-green-400"></div>   
        <div className="w-full h-screen left-0 top-0 absolute bg-neutral-800 bg-opacity-30"></div>
        <div className="left-1/3 top-2/3 absolute origin-top-left -rotate-90 text-white text-[64px] font-bold font-['Lexend Deca']">Signup</div>
      </div>

  <div className='m-20 mt-10 col-span-8 flex items-center justify-start '>
  <div className='flex flex-col items-start w-full max-w-md'>
    <h1 className="text-white text-5xl font-normal font-['DM Serif Display']">Welcome</h1>
    <p className="text-neutral-400 text-2xl font-light font-['Lexend Deca']">Let’s sign you up quickly</p>

      <input id='name' type='text' onChange={(e) => { setUser({...user, name : e.target.value})}} value={user.name} className="items-start mt-7 p-5 w-full bg-neutral-800 border-2 border-green-400  focus:border-green-500 text-neutral-400 text-base font-light font-['Lexend Deca']"  placeholder='Enter Your Name'/>

      <input id='username' type='text' onChange={(e) => { setUser({...user, username : e.target.value})}} value={user.username} className="items-start mt-5 p-5 w-full bg-neutral-800 border-2 border-green-400  focus:border-green-500 text-neutral-400 text-base font-light font-['Lexend Deca']"  placeholder='Enter Your Username'/>

      <input id='email' type='email' onChange={(e) => { setUser({...user, email : e.target.value})}} value={user.email} className="items-start mt-5 p-5 w-full bg-neutral-800 border-2 border-green-400 focus:border-green-500 text-neutral-400 text-base font-light font-['Lexend Deca']" placeholder='Enter Your Email'/>

      <input id='password' type='password' onChange={(e) => { setUser({...user, password : e.target.value})}} value={user.password} className="items-start mt-5 p-5 w-full bg-neutral-800 border-2 border-green-400 focus:border-green-500  text-neutral-400 text-base font-light font-['Lexend Deca']" placeholder='Enter Your Password'/>

      <div className='mt-5 w-full flex flex-row justify-between'>

      <button onClick={handleSignup} className="pt-3 pb-3 pl-7 pr-7 bg-green-400 text-black text-xl font-semibold font-['Lexend Deca'">Signup</button>

      <div className='flex flex-col items-end'>
      <p className="text-white text-xl font-normal font-['Lexend Deca']">have an account?</p><Link href='/' className="text-green-400 text-xl font-normal font-['Lexend Deca']">login</Link>
      </div>
      </div>

</div>  
</div>
    </div>
  )
}

export default Signup