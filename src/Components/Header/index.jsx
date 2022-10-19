import React from 'react'
import search from '../../Images/Search.png'
import './style.css'
import notif from '../../Images/Notif.png'
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <>
        <div className='w-screen bg-[#19976A] h-[0.3rem] relative top-0 left-0'></div>

        <div className='w-screen p-4 px-7 border-b border-[#282828] flex items-center justify-between'>
            <div className='flex'> 
                <Link to='/'><h3 className='cursor-pointer font-bold text-xl text-[#fff] flex items-end relative bottom-1'>Loopwork  <p className='text-4xl font-bold text-[#19976A]'>.</p></h3></Link>
            </div>

            <div className='flex items-center relative'>
                <div className='flex items-center'>
                    <img src={search} className='w-[22px]' alt="" />
                    <input className='w-[15rem] ml-[-4px] font-reuglar text-lg text-[#818387] bg-transparent outline-none' type="text" placeholder='What are you looking for?'/>
                </div>

                <div className='ml-4'>
                    <Badge badgeContent={0} color='warning'>
                        <img src={notif} className='w-[24px] cursor-pointer' alt="" />
                    </Badge>
                </div>  
            
            </div>
        </div>
    </>
  )
}

export default Header