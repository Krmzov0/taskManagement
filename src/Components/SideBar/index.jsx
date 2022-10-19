import React from 'react'
import { Link } from 'react-router-dom';
import Tasks from '../../Images/Tasks.png'
import Completed from '../../Images/Completed.png'
import Settings from '../../Images/Settings.png'
// import Project from '../../Images/Project.png'
import './style.css'

function SideBar() {

  return (
    <>
      <div className='w-[20%] p-9 py-16 border-r border-[#282828] h-[90%] flex justify-between flex-col absolute'>

        <div>
          <div className='flex flex-col w-full nav h-[10rem] justify-between'>
            <li className='flex items-center'><img src={Tasks} className='w-[26px]' alt="" /><Link className='font-regular text-xl text-[#818387] ml-7' to='/'>My Tasks</Link></li>
            <li className='flex items-center'><img src={Completed} className='w-[26px]' alt="" /><Link className='font-regular text-xl text-[#818387] ml-7' to='completed'>Completed</Link></li>
            <li className='flex items-center'><img src={Settings} className='w-[26px]' alt="" /><Link className='font-regular text-xl text-[#818387] ml-7' to='settings'>Settings</Link></li>
          </div>

          <div className='mt-16 '>
            <div className='flex items-center justify-between'><h3 className='cursor-pointer font-regular text-xl text-[#ffffff] flex items-center'>Projects <svg xmlns="http://www.w3.org/2000/svg" class="relative top-[1px] ml-4 icon icon-tabler icon-tabler-chevron-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#818387" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="6 9 12 15 18 9" />
            </svg></h3>

              <svg xmlns="http://www.w3.org/2000/svg" class="hoverIcon cursor-pointer  icon icon-tabler icon-tabler-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#818387" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg></div>

            <div>
              <li className='pt-9 flex items-center'><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#19976A" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="4" y="4" width="16" height="16" rx="2" />
              </svg><Link className='font-regular text-xl text-[#818387] ml-7' to='project'>Project Name</Link></li>
            </div>
          </div>
        </div>


        <div className='flex justify-between items-center cursor-pointer'>
          <div className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#19976A" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="7" r="4" />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          </svg>
            <h3 className='text-xl font-regular text-[#e9e9e9] ml-3'>User Name </h3>
          </div>

          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="usericon relative top-[1px] ml-4 icon icon-tabler icon-tabler-chevron-down" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#818387" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>

      </div>
    </>
  )
}

export default SideBar