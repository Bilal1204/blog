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
    
<div className='grid sm:grid-cols-1 md:grid-cols-12 h-screen bg-neutral-800'>
    <div className="md:col-span-4 hidden md:block relative">
        <img className='absolute inset-0 object-cover w-full h-full' src='/bgimage.png'/>
        <div className="w-[100vh] h-screen left-[100%] absolute origin-top-left rotate-90 border-t-4  border-green-400"></div>   
        <div className="w-full h-screen left-0 top-0 absolute bg-neutral-800 bg-opacity-30"></div>
        <div className="left-1/3 top-2/3 absolute origin-top-left -rotate-90 text-white text-[64px] font-bold font-['Lexend Deca']">Signup</div>
    </div>

    <div className='sm:col-span-1 md:col-span-8 m-20 mt-10 mb-0'>
        <div className='flex flex-col items-center md:items-start justify-center md:justify-start '>
            
            <h1 className="text-white text-5xl font-normal font-['DM Serif Display']">Welcome</h1>
            <p className="text-neutral-400 text-2xl font-light font-['Lexend Deca']">Let’s sign you up quickly</p>

            <input autoComplete='off' onChange={(e) => setUser({...user, name: e.target.value})} value={user.name} className="sm:items-center md:items-start mt-10 p-5 w-full bg-neutral-800 border-2 border-green-400 text-neutral-400 text-base font-light font-['Lexend Deca'] focus:border-green-500" type="text" placeholder='Enter Your Name'/>

            <input autoComplete='off' onChange={(e) => setUser({...user, username: e.target.value})} value={user.username} className="sm:items-center md:items-start mt-5 p-5 w-full bg-neutral-800 border-2 border-green-400 text-neutral-400 text-base font-light font-['Lexend Deca'] focus:border-green-500" type="text" placeholder='Enter Your Username'/>

            <input autoComplete='off' onChange={(e) => setUser({...user, email: e.target.value})} value={user.email} className="sm:items-center md:items-start mt-5 p-5 w-full bg-neutral-800 border-2 border-green-400 text-neutral-400 text-base font-light font-['Lexend Deca'] focus:border-green-500" type="email" placeholder='Enter Your Email'/>

            <input autoComplete='off' onChange={(e) => setUser({...user, password: e.target.value})} value={user.password} className="sm:items-center md:items-start mt-5 p-5 w-full bg-neutral-800 border-2 border-green-400 text-neutral-400 text-base font-light font-['Lexend Deca'] focus:border-green-500" type="password" placeholder='Enter Your Password'/>

            <div className='mt-10 w-full flex flex-row justify-between'>

            <button onClick={handleSignup} className="p-3 md:p-5 sm:m-2 md:m-0 bg-green-400 text-black text-xl font-semibold font-['Lexend Deca'">SIGNUP</button>

            <div className='flex flex-col items-end'>
            
            <div className='flex flex-col items-end'>

            <p className="text-white text-xl font-normal font-['Lexend Deca']">Already have an account?</p>
            <Link href='/login' className="text-green-400 text-xl font-normal font-['Lexend Deca']">login</Link>
            </div>

            </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Signup