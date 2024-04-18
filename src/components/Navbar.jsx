import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  window.scroll();
  return (
    <div
      id="navbar"
      className="w-full h-16 z-30 fixed top-0 flex items-center justify-between p-5 bg-white bg-opacity-25 shadow-inner shadow-white backdrop-blur-sm"
    >
      <Link to={"/"}>
        <div className="first w-fit gap-2 flex items-center justify-around font-bold">
          <img
            src="/inpajama.jpg"
            alt="logo"
            className="w-10 h-10 object-cover rounded-full "
          />
          IN-PAJAMA
        </div>
      </Link>
      <div className="second w-1/2  justify-between items-center hidden lg:flex">
        <Link to={"/"}>
          <div
            className="w-24 p-2 bg-gray-900 text-white flex justify-center items-center rounded-full hover:bg-gray-950 cursor-pointer"
            href="#"
          >
            Home
          </div>
        </Link>
        <Link to={"/about"}>
          <div
            className="w-24 p-2 bg-gray-900 text-white flex justify-center items-center rounded-full hover:bg-gray-950 cursor-pointer"
            href="#"
          >
            About
          </div>
        </Link>
        <Link to={"/courses"}>
          <div
            className="w-24 p-2 bg-gray-900 text-white flex justify-center items-center rounded-full hover:bg-gray-950 cursor-pointer"
            href="#"
          >
            Courses
          </div>
        </Link>
        <Link to={"/blogs"}>
          <div
            className="w-24 p-2 bg-gray-900 text-white flex justify-center items-center rounded-full hover:bg-gray-950 cursor-pointer"
            href="#"
          >
            Blogs
          </div>
        </Link>
        <Link to={"/youtube"}>
          <div
            className="w-24 p-2 bg-gray-900 text-white flex justify-center items-center rounded-full hover:bg-gray-950 cursor-pointer"
            href="#"
          >
            Youtube
          </div>
        </Link>
      </div>
      {/* <div className="third w-24 flex justify-center items-center bg-gray-900 hover:bg-gray-950 cursor-pointer p-2 text-white rounded-full">
        Avtar
      </div> */}

      <div className="dropdown dropdown-end">
        {/* <div  className="btn m-1"> */}
        <div
          tabIndex={0}
          role="button"
          className="w-14 h-14 rounded-xl  flex justify-center items-center bg-gray-900 hover:bg-gray-950 cursor-pointer  text-white "
        >
          <p>A</p>
          {/* <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
        </div>
        {/* </div> */}
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          
          <li className="block lg:hidden">
            <Link to={'/about'}> <a>About</a></Link>
          </li>
          <li className="block lg:hidden">
            <Link to={'/courses'}> <a>Courses</a></Link>
          </li>
          <li className="block lg:hidden">
            <Link to={'/youtube'}> <a>Youtube</a></Link>
          </li>
          <li className="block lg:hidden">
            <Link to={'/blogs'}> <a>Blogs</a></Link>
          </li>
          <li>
            <Link to={'/login'}> <a>Profile</a></Link>
          </li>
          <li>
            <Link to={'/login'}> <a>Your Courses</a></Link>
          </li>
          <li>
            <Link to={'/login'}> <a>Login</a></Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
