"use client";
import React,{useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Blogs from './components/Blogs';
import {useDispatch, useSelector } from 'react-redux';
import { addBlog } from './redux/slices/blogSlice';

const  Home= () => {

  // const [user, setUser] = useState()
  const user = useSelector(state => state.user.user)
  const [loading, setLoading] = useState(true)
  const [blogs, setBlogs] = useState([]);
  // const blogs = useSelector(state => state.blogs.blogs)
  const [page, setPage] = useState(1);
  const limit = 10; 

  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res= await axios.get(`/api/blogs?page=${page}&limit=${limit}`)
        setBlogs(res.data.blogs);
        dispatch(addBlog(res.data.blogs))
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page]);

  const handleLogout = async() =>{
    try {
      await axios.get('/api/logout');
      router.push('/login');
  } catch (error) {
      console.log(error);
  }
  }

  return (
    <div className='lg:grid lg:grid-cols-12 min-h-screen bg-neutral-800 p-5 lg:p-0'>

    <div className='fixed top-0 left-5 lg:col-span-1 lg:border-green-500'>
      <div className=' flex flex-row lg:flex-col justify-between lg:justify-center items-center border lg:border-0 border-green-400 lg:border-none p-2 lg:p-0 fixed lg:static bottom-0 inset-x-0 m-5 lg:m-0 bg-neutral-800'>
          {
            user ? 
            <>
            <div className="mt-0 lg:mt-24 flex justify-center items-center text-3xl text-black font-bold w-14 h-14 bg-green-400 rounded-full ml-2 lg:ml-0">
              <Link href={`/users/${user.username}`}>
                {user.username[0]}
              </Link>
            </div> 
            <Link href='/login' className='cursor-pointer'>
            <img className='pt-2 lg:pt-6 pl-1' src="/search.svg" alt="" />
            <p className='hidden lg:block'>search</p>
          </Link>
          <Link href='/' className='cursor-pointer'>
            <img className='pt-2 lg:pt-6 pl-2' src="/trending.svg" alt="" />
            <p className='hidden lg:block'>trending</p>
          </Link>
          <Link className='cursor-pointer mr-2 lg:mr-0' href={`/create`}>
            <img className='pt-2 lg:pt-24 pl-1' src="/add.svg" alt="" />
            <p className='hidden lg:block'>create</p>
          </Link>
          <button className='font-bold text-green-400 text-xl lg:pt-10 cursor-pointer mr-2 lg:mr-0' onClick={handleLogout}>
            <p className=''>Logout</p>
          </button>
            </>
            :
             ""
          }
        </div>
    </div>
    {/* <div className="hidden lg:block w-[100vh] h-screen left-[100%] origin-top-left rotate-90 border-t-2  border-green-400 lg:z-10"></div> */}


    {
      blogs?.map(blog => 
      <div className='lg:col-span-11'>
       <Blogs key={blog._id} blog={blog}/> 
      </div>
      )
    }
    </div>
  )
}

export default Home