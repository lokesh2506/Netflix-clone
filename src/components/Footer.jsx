import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { RiNetflixFill } from "react-icons/ri";
const Footer = () => {
  return (
    <footer className='flex md:items-center md:justify-between px-5 w-full md:h-16 bg-neutral-700 mt-5  xs:block  xs:h-28 xs:justify-center pt-3 '>
       <div className='sm:hidden xs:hidden lg:block'>
        © 2021 Company, Inc
      </div>
      <div className='xs:mt-4 '>
        <ul className='flex gap-7 xs:justify-center xs:w-full'>
          <li>Home</li>
          <li>Feature</li>
          <li>About</li>
          <li>Pricing</li>
        </ul>
      </div>
     <div className='h-[1px] w-full bg-neutral-500 hidden xs:block my-2'></div>
      <div className='flex gap-6 text-2xl xs:justify-center xs:w-full '>
       <a href="https://www.linkedin.com/in/lokeshkumar-s/"> <BsLinkedin /></a>
       <a href="https://www.github.com/lokesh2506"> <BsGithub /></a>
        <BsTwitterX/>
        <RiNetflixFill />
      </div>
    </footer>
  )
}

export default Footer