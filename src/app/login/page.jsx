"use client";
import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useDispatch } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../redux/slices/userSlice';
import { toast } from 'react-toastify';

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();


  const [user, setUser] = useState({
    username: '',
    password: ''
  })

    const handleLogin = async () => {
      dispatch(loginStart())
      try {
        const res = await axios.post('/api/login', user)
        if(res.data.status === 400 || res.data.status === 404){
          toast.error("Invalid Credentials")
        }
        else{
          dispatch(loginSuccess(res.data.user))
          console.log({user : res.data.user})
          router.push(`/`)
        }
      } catch (error) {
        dispatch(loginFailure(error.toString()))
        toast.error("Login Failed")
      }
    }

  return (

<div className='grid sm:grid-cols-1 md:grid-cols-12 h-screen bg-neutral-800'>
    <div className="md:col-span-4 hidden md:block relative">
        <img className='absolute inset-0 object-cover w-full h-full' src='/bgimage.png'/>
        <div className="w-[100vh] h-screen left-[100%] absolute origin-top-left rotate-90 border-t-4  border-green-400"></div>   
        <div className="w-full h-screen left-0 top-0 absolute bg-neutral-800 bg-opacity-30"></div>
        <div className="left-1/3 top-2/3 absolute origin-top-left -rotate-90 text-white text-[64px] font-bold font-['Lexend Deca']">Login</div>
    </div>

    <div className='sm:col-span-1 md:col-span-8 m-8 lg:m-20'>
        <div className='flex flex-col items-center md:items-start justify-center md:justify-start '>
            
            <h1 className="text-white text-5xl font-normal font-['DM Serif Display']">Welcome</h1>
            <p className="text-neutral-400 text-2xl font-light font-['Lexend Deca']">Let’s log you in quickly</p>

            <input autoComplete='off' onChange={(e) => setUser({...user, username: e.target.value})} value={user.username} className="sm:items-center md:items-start mt-10 p-5 w-full bg-neutral-800 border-2 border-green-400 text-neutral-400 text-base font-light font-['Lexend Deca'] focus:border-green-500" type="text" placeholder='Enter Your Username'/>

            <input autoComplete='off' onChange={(e) => setUser({...user, password: e.target.value})} value={user.password} className="sm:items-center md:items-start mt-10 p-5 w-full bg-neutral-800 border-2 border-green-400 text-neutral-400 text-base font-light font-['Lexend Deca'] focus:border-green-500" type="password" placeholder='Enter Your Password'/>

            <div className='mt-10 w-full flex flex-row justify-between'>

            <button onClick={handleLogin} className="p-2 md:p-5 bg-green-400 text-black text-xl font-semibold font-['Lexend Deca'">LOGIN</button>

            <div className='flex flex-col items-end'>
            <p className="text-white text-xl font-normal font-['Lexend Deca']">Dont have an account?</p>
            <Link href='/signup' className="text-green-400 text-xl font-normal font-['Lexend Deca']">signup</Link>
            </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Login