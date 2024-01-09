"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Link from 'next/link';

const Blogs = ({blog}) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const dateObject = new Date(blog.date);
  const date = dateObject.getDate();
  const month = dateObject.getMonth();

  const limitedContent = blog.content.split(' ').slice(0, 100).join(' ');

  return (
   <div className='lg:pl-20 p-10 grid grid-cols-11'>
    
    <div className='col-span-1 m-2'>
    <div className='flex flex-col items-end font-bold text-xl'>
    <h1>{date}</h1>
    <h1>{months[month]}</h1>
    </div>

    </div>

    <div className='col-span-10'>
    <Link href={`/blog/${blog._id}`}>
    <h1 className='text-green-400 font-bold text-xl pb-1'>{blog.title}</h1>
    </Link>
    <p>{limitedContent}...</p>
    </div>
   </div> 
  )
}

export default Blogs;
