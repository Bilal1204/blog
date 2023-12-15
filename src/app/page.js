"use client";
import React,{useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const  Home= () => {

  return (
    <div className='lg:grid lg:grid-cols-12 h-screen bg-neutral-800 p-10 lg:p-0'>

    <div className='lg:col-span-1'>
      <div className='flex flex-row lg:flex-col justify-between lg:justify-center items-center border lg:border-0 border-green-400 lg:border-none p-2 lg:p-0
      fixed lg:relative bottom-0 inset-x-0 m-10 lg:m-0'>
          <div className="mt-0 lg:mt-24 flex justify-center items-center text-2xl text-black font-semibold w-14 h-14 bg-green-400 rounded-full ml-2 lg:ml-0">
            B
          </div>
          <Link href='/login' className='cursor-pointer'>
            <img className='pt-2 lg:pt-6 pl-1' src="/search.svg" alt="" />
            <p className='hidden lg:block'>search</p>
          </Link>
          <Link href='/' className='cursor-pointer'>
            <img className='pt-2 lg:pt-6 pl-2' src="/trending.svg" alt="" />
            <p className='hidden lg:block'>trending</p>
          </Link>
          <Link className='cursor-pointer mr-2 lg:mr-0' href='/'>
            <img className='pt-2 lg:pt-24 pl-1' src="/add.svg" alt="" />
            <p className='hidden lg:block'>create</p>
          </Link>
        </div>
    </div>

    <div className="hidden lg:block w-[100vh] h-screen left-[100%] origin-top-left rotate-90 border-t-2  border-green-400"></div> 
    </div>
  )
}

export default Home