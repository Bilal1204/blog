"use client"
import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'


const Profile = ({params}) => {
  const profile = params.profile

  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    newPassword: ''
});

  const [blogs, setBlogs] = useState([])

const handleUpdate = async () => {
  try {
    const res = await axios.put(`/api/me`, user)
    setUser(res.data.updatedUser)
    toast.success("Profile Updated Successfully")
  } catch (error) {
    toast.error("Profile Update Failed")
  }
}

const handleUserBlogs = async () => {
  try {
    
  } catch (error) {
    
  }
}

useEffect(() => {
  const fetchUser = async () => {
    try {
      const res = await axios.get(`/api/me`);
      setUser(res.data.user);
      console.log({user})
      } catch (error) {
        console.log(error);
      }
    }
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`/api/blogs?userName=${profile}`);
        setBlogs(res.data.blogs);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser();
    fetchBlogs();
  }, [])

  return (
    <div className='flex flex-col justify-center align-middle w-full min-h-screen pt-10 pl-10 pr-10 lg:pl-20 lg:pr-20 bg-neutral-800'>
    <div className='grid grid-cols-12'>
        <div className='col-span-5'></div>
    <div className='col-span-2 text-4xl text-green-400 font-bold'>Profile</div>
    </div>

    {/* <div className='flex flex-row'> */}

      <div className='flex flex-col lg:grid lg:grid-cols-12 w-full justify-between mt-10'>
        <div className='lg:col-span-1'></div>
        <div className='lg:col-span-2 lg:flex lg:flex-col lg:justify-center lg:align-middle lg:pt-4'>
        <div className=' text-2xl pr-2'>Name</div>
        </div>
        <div className='lg:col-span-7'>
        <input id='name' autoComplete='off' onChange={(e) => setUser({...user, name: e.target.value})} value={user.name} className="sm:items-center md:items-start mt-3 p-5 w-full bg-neutral-800 border-2 border-green-400 text-white text-base font-light font-['Lexend Deca'] focus:border-green-500 text-xl" type="text" placeholder={user.name}/>
        </div>
      </div>      

      <div className='flex flex-col lg:grid lg:grid-cols-12 w-full justify-between mt-10'>
      <div className='lg:col-span-1'></div>
        <div className='lg:col-span-2 lg:flex lg:flex-col lg:justify-center lg:align-middle lg:pt-4'>
        <div className=' text-2xl pr-2'>Username</div>
        </div>
        <div className='lg:col-span-7'>
        <input autoComplete='off' onChange={(e) => setUser({...user, username: e.target.value})} value={user.username} className="sm:items-center md:items-start mt-3 p-5 w-full bg-neutral-800 border-2 border-green-400 text-white text-base font-light font-['Lexend Deca'] focus:border-green-500 text-xl" type="text" placeholder={user.username}/>
        </div>
      </div>
      
      <div className='flex flex-col lg:grid lg:grid-cols-12 w-full justify-between mt-10'>
      <div className='lg:col-span-1'></div>
        <div className='lg:col-span-2 lg:flex lg:flex-col lg:justify-center lg:align-middle lg:pt-4'>
        <div className=' text-2xl pr-2'>Email</div>
        </div>
        <div className='lg:col-span-7'>
        <input autoComplete='off' onChange={(e) => setUser({...user, email: e.target.value})} value={user.email} className="sm:items-center md:items-start mt-3 p-5 w-full bg-neutral-800 border-2 border-green-400 text-white text-base font-light font-['Lexend Deca'] focus:border-green-500 text-xl" type="email" placeholder={user.email}/>
        </div>
      </div>
      
      <div className='flex flex-col lg:grid lg:grid-cols-12 w-full justify-between mt-10'>
      <div className='lg:col-span-1'></div>
        <div className='lg:col-span-2 lg:flex lg:flex-col lg:justify-center lg:align-middle lg:pt-4'>
        <div className=' text-2xl pr-2'>New Password</div>
        </div>
        <div className='lg:col-span-7'>
        <input  autoComplete='off' onChange={(e) => setUser({...user, newPassword: e.target.value})} className="sm:items-center md:items-start mt-3 p-5 w-full bg-neutral-800 border-2 border-green-400 text-white text-base font-light font-['Lexend Deca'] focus:border-green-500 text-xl" type="text" placeholder="Enter New Password"/>
        </div>
      </div>
      
      <div className='flex lg:grid lg:grid-cols-12 mt-10'>
      <div className='lg:col-span-5'></div>
      <button onClick={handleUpdate} className="col-span-2 m-2 mt-5 p-4 bg-green-400 text-black text-xl font-semibold font-['Lexend Deca'">Update Profile</button>
      
      </div>
      
      <div className='grid grid-cols-12 mt-20'>
        <div className='lg:col-span-5'></div>
    <div className='col-span-2 text-4xl text-green-400 font-bold'>Blogs</div>
    </div>


    </div>
  )
}

export default Profile