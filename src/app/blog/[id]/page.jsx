"use client"
import React,{useState, useEffect} from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

const Blog = ({params}) => {
    const router = useRouter();
const [blog,setBlog] = useState();

const id = params.id;

useEffect(() => {
  const fetchData = async () => {
      try {
        const res = await axios.get(`/api/blogs?id=${id}`);
        setBlog(res.data.blog);
      } catch (error) {
        console.log(error);
    }
  };
  fetchData();
}, [id]);

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const dateObject = new Date(blog?.date);
const date = dateObject.getDate();
const month = dateObject.getMonth();
const year = dateObject.getFullYear();

    return (
        <div className='flex flex-col pt-10 pl-10 pr-10 lg:pl-20 lg:pr-20 bg-neutral-800 min-h-screen'>
        <h1 className='text-green-400 text-3xl font-bold'>{blog?.title}</h1>
        <p>written by @{blog?.userName}</p>
        <p className='pb-10'>on {date} {months[month]} {year}</p>
        <p className='text-white text-lg'>{blog?.content}</p>
        </div>

    )
}

export default Blog