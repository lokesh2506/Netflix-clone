import React, { useContext, useEffect, useState } from 'react';
import logo from "../assets/logo.png";
import user_logo from "../assets/user_icon.jpg";
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { PiTelevision } from "react-icons/pi";
import { BiSolidCameraMovie } from "react-icons/bi";
import { navigation } from '../Constant/index';


const Header = () => {
  const location=useLocation();
  
  const removeSpace=location?.search?.slice(3)?.split("%20")?.join(" ")
 
  const [searchinput,setSearchInput]=useState(removeSpace);
  const navigate=useNavigate();
  function eventHandler(e){
    e.preventDefault();
    navigate(`/search?q=${searchinput}`)
  }

 
  
  return (
    <div className='fixed top-0 h-20 w-full bg-black  z-40 lg:px-10 fixed sm:px-2 z-10 md:z-10'>
      <div className="container flex items-center h-full ">
        <Link to="/"><img src={logo} alt="Netflix Logo" className='w-32 ' /></Link>
        <nav className='hidden lg:flex items-center gap-6 ml-8'>
          {
            navigation.map((nav) => (
              <div key={nav.label} className='text-lg'>
                <NavLink to={nav.href} className={({ isActive }) => isActive ? 'text-neutral-50' : 'hover:text-neutral-100'}>
                  {nav.label}
                </NavLink>
              </div>
            ))
          }
        </nav>
        <div className=' flex items-center ml-auto '>
          <div className='bg-neutral-700 mr-8 rounded-xl'>
            <form className=' flex items-center' onSubmit={(e)=>eventHandler(e) }>
              <input type="text" placeholder='Search here...' value={searchinput} onChange={(e)=>setSearchInput(e.target.value)} className='lg:block  hidden px-4 py-2 bg-neutral-700 outline-none border-none rounded-lg' />
              <button type='submit' className='text-2xl mr-3  hidden lg:block'><FaMagnifyingGlass /></button>
            </form>
          </div>
          <div className='lg:w-12 w-10 me-3'>
              <img src={user_logo} alt="User Icon" className='rounded-3xl ' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
