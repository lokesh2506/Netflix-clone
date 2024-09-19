import React, { useEffect, useState } from 'react';
import logo from "../assets/logo.png";
import user_logo from "../assets/user_icon.jpg";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaMagnifyingGlass } from "react-icons/fa6";

export const navigation = [
  {
    label: "TV Shows",
    href: "tv"
  },
  {
    label: "Movies",
    href: "movies"
  }
];


const Header = () => {
  const [searchinput,setSearchInput]=useState('');
  const navigate=useNavigate();

  useEffect(()=>{
      navigate(`/search?q=${searchinput}`)
  },[searchinput])
  
  return (
    <div className='navbar fixed top-0 h-20 w-full bg-neutral-600 bg-opacity-75 lg:px-10 sm:px-2'>
      <div className="container flex items-center h-full">
        <Link to="/"><img src={logo} alt="Netflix Logo" className='w-32' /></Link>
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
        <div className=' flex items-center ml-auto'>
          <div className='bg-neutral-700 mr-8 rounded-xl'>
            <form className=' flex items-center' onSubmit={(e)=>e.preventDefault()}>
              <input type="text" placeholder='Search here...' value={searchinput} onChange={(e)=>setSearchInput(e.target.value)} className='lg:block cd hidden px-4 py-2 bg-neutral-700 outline-none border-none rounded-lg' />
              <button className='text-2xl mr-3'><FaMagnifyingGlass /></button>
            </form>
          </div>
          <div className='w-12'>
              <img src={user_logo} alt="User Icon" className='rounded-3xl' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
