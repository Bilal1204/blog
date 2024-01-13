"use client"
import React,{useState, useEffect} from 'react'
import Navbar from '../components/Navbar';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useSelector , useDispatch} from 'react-redux';
import { addBlog } from '../redux/slices/blogSlice';

const Create = () => {

  const dispatch = useDispatch()
  // const [user, setUser] = useState()
  const user = useSelector(state => state.user.user)
  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  
  const router = useRouter()

  const handlePublish = async () =>{
    try {
      const res = await axios.post('/api/blogs', {title, content, userName : user.username, userId : user._id});
      dispatch(addBlog(res.data.savedBlog))
      toast.success("Blog Published Successfully");
    } catch (error) {
      toast.error("Blog Publish Failed");
    }
  }

  return (
      <div className='bg-neutral-800'>
      <Navbar/>
      <div className='flex flex-col items-center p-2 lg:p-10'>
          <h1  className='font-bold text-5xl text-green-400 pt-2 pb-5 lg:pb-0'>{user?.name}s Blog</h1>
          <div className='flex flex-col align-center p-10 w-full'>
              <div className='lg:grid lg:grid-cols-10'>
              <h1 className='lg:col-span-2 font-bold text-5xl text-green-400 pt-2 pb-5 lg:pb-0'>Title</h1>
              <input onChange={(e) => setTitle(e.target.value)} autoComplete='off' className="col-span-8 sm:items-center md:items-start p-5 w-full bg-neutral-800 border-2 border-green-400 text-white text-base font-light font-['Lexend Deca'] focus:border-green-500" type="text" placeholder='Enter Your Title'/>
              </div>
          </div>
          <div className='flex flex-col align-center p-10 pt-0 w-full'>
              <div className='lg:grid lg:grid-cols-10'>
              <h1 className='lg:col-span-2 font-bold text-5xl text-green-400 pt-2 pb-5 lg:pb-0'>Content</h1>
              <textarea onChange={(e) => setContent(e.target.value)} autoComplete='off' className="col-span-8 sm:items-center md:items-start p-5 w-full bg-neutral-800 border-2 border-green-400 text-white text-base font-light font-['Lexend Deca'] focus:border-green-500" name="" id="" cols="30" rows="10" placeholder='Write Your Blog'></textarea>
              </div>
          </div>

      <div className='flex flex-row'>
      <button onClick={handlePublish} className="m-5 p-2 md:p-5 bg-green-400 text-black text-xl font-semibold font-['Lexend Deca'">Publish</button>
      
      <button onClick={() => {router.push('/')}} className="m-5 p-2 md:p-5 bg-green-400 text-black text-xl font-semibold font-['Lexend Deca']">Home</button>
      </div>
      </div>

    </div>
  )
}

export default Create