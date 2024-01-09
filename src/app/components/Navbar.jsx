"use client";
import React,{useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const  Navbar= () => {

  const date = new Date();
  const today = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)

  const handleLogout = () =>{
    try {
      axios.get('/api/logout');
      router.push('/login');
  } catch (error) {
      console.log(error);
  }
  }

  return (
    <div className='flex flex-row justify-end'>
    <button className='font-bold text-green-400 text-xl cursor-pointer m-5' onClick={handleLogout}>Logout
    </button>
    <Link className='font-bold text-green-400 text-xl cursor-pointer m-5' href='/'>Home</Link>
    </div>
  )
}

export default Navbar