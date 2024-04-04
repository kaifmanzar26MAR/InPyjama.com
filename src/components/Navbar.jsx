import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  window.scroll(
    
  )
  return (
    <div id='navbar' className='w-full h-16 z-30 fixed top-0 flex items-center justify-between p-5 bg-white bg-opacity-25 shadow-inner shadow-white backdrop-blur-sm'>
      <Link to={'/'}><div className="first w-fit gap-2 flex items-center justify-around font-bold">
        <img src="/inpajama.jpg" alt="logo" className='w-10 h-10 object-cover rounded-full ' />
        IN-PAJAMA
      </div></Link>
      <div className="second w-1/2  justify-between items-center hidden lg:flex">
        <a className='w-24 p-2 bg-gray-900 text-white flex justify-center items-center rounded-full hover:bg-gray-950 cursor-pointer' href="#">Home</a>
        <a className='w-24 p-2 bg-gray-900 text-white flex justify-center items-center rounded-full hover:bg-gray-950 cursor-pointer' href="#">About</a>
        <a className='w-24 p-2 bg-gray-900 text-white flex justify-center items-center rounded-full hover:bg-gray-950 cursor-pointer' href="#">Courses</a>
        <a className='w-24 p-2 bg-gray-900 text-white flex justify-center items-center rounded-full hover:bg-gray-950 cursor-pointer' href="#">Blogs</a>
        <a className='w-24 p-2 bg-gray-900 text-white flex justify-center items-center rounded-full hover:bg-gray-950 cursor-pointer' href="#">Youtube</a>
      </div>
      <div className="third w-24 flex justify-center items-center bg-gray-900 hover:bg-gray-950 cursor-pointer p-2 text-white rounded-full">
        Avtar
      </div>
    </div>
  )
}

export default Navbar
