"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "@/app/components/Card";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Navbar from "@/app/components/Navbar";

const Profile = ({params})=> {

  const profile = params.profile
  const [user, setUser] = useState()
  const [blogs, setBlogs] = useState()

  const router = useRouter()
  const loggedInUser = useSelector(state => state.user.user.username)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`/api/users?uname=${profile}`)
        setUser(res.data.user)
        setBlogs(res.data.blogs)
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser();
  }, [])

  return <div className="bg-neutral-800 min-h-screen">
  <Navbar />
    {
      user && 
      <div className="p-10 pt-0">
        <div className="flex flex-row justify-center">
        <h1 className="font-bold text-5xl text-green-500">{user.name}</h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-center">
        <h1 className="text-green-400 p-3">Username:- @{user.username}</h1>
        <h1 className="text-green-400 p-3">Contact:- {user.email}</h1>
        </div>
        <div className="flex flex-col items-start">
        {
          loggedInUser === profile && 
        <button onClick={() => router.push(`/users/${profile}/edit`)} className="m-3 p-3 md:p-5 bg-green-400 text-black text-xl font-semibold font-['Lexend Deca'" >Edit Profile</button>
        }
        </div>
        
      </div>
    }
    {      
     blogs && 
     <>
     <div className="flex flex-row justify-center align-middle pt-10 pb-10">
          <h1 className="text-4xl font-bold text-green-500">Blogs</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3">
          {blogs?.map(blog =><Card blog={blog}/>)}
        </div>
        {
          blogs?.length === 0 && 
          <div className="flex flex-row justify-center align-middle pt-10 pb-10">
          <h1 className="text-green-500">No Blogs</h1>
          </div>
        }
     </>
    }
  </div>;
}

export default Profile;