import React from 'react'
import { MoblieNavigation } from '../Constant/index'
import { NavLink } from 'react-router-dom'

const MobielNavigation = () => {
  return (
    <div className='fixed bottom-0 h-16  bg-black bg-opacity-15 w-screen lg:hidden z-41 backdrop-blur-md'>
      <div className='flex items-center justify-between h-full px-4'>
        {
          MoblieNavigation.map((nav,index)=>{
            return(
              <NavLink key={index} to={nav.href} className={({isActive})=>`flex flex-col items-center ${isActive ? 'text-neutral-50': 'text-neutral-400'}` }>
                <div className='text-2xl'>
                  {nav.icon}
                </div>
                <p>{nav.label}</p>
              </NavLink>
            )
          })
        }
      </div>
    </div>
  )
}

export default MobielNavigation