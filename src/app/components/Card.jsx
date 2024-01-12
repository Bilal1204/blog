import React from 'react'

const Card = ({blog}) => {
console.log({blog})

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const dateObject = new Date(blog.date);
const date = dateObject.getDate();
const month = dateObject.getMonth();
const year = dateObject.getFullYear();

const smContent = blog.content.split(' ').slice(0, 15).join(' ');
const lgContent = blog.content.split(' ').slice(0, 30).join(' ');


  return (
    <div className='h-52 md:h-72 rounded-xl bg-neutral-900 m-5 p-5'>
        <div className='flex flex-row justify-between'>
        <h1 className='text-green-500 text-xl'>{blog.title}</h1>
        <p>{date} {months[month]} {year}</p>
        </div>
        <p className='pt-7 lg:hidden'>{smContent}</p>
        <p className='pt-7 hidden lg:block'>{lgContent}</p>
    </div>
  )
}

export default Card