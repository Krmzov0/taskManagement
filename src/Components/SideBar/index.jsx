import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Tasks from '../../Images/Tasks.png'
import Completed from '../../Images/Completed.png'
import Settings from '../../Images/Settings.png'
// import Project from '../../Images/Project.png'
import './style.css'
import { motion } from "framer-motion"

function SideBar() {

  const [userMenu, setuserMenu] = useState(false);
  const isLogged = false;

  const toggleUserMenu = () => {
    userMenu ? setuserMenu(false) : setuserMenu(true);
  }



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


        <div className='flex flex-col'>

          {userMenu && (<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}><div className='w-full h-[8rem] bg-[#222222] border border-[#3b3b3b] p-4 rounded-lg'>
            {isLogged ? <div className='h-full flex flex-col justify-around usermenu'>
              <h4 className='cursor-pointer flex items-center text-xl font-reuglar text-[#e9e9e9c0]'><svg xmlns="http://www.w3.org/2000/svg" class="mr-5 icon icon-tabler icon-tabler-user" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#e9e9e9c0" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="7" r="4" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              </svg>Account</h4>

              <h4 className='cursor-pointer flex items-center text-xl font-reuglar text-[#e9e9e9c0]'><svg xmlns="http://www.w3.org/2000/svg" class="mr-5 relative left-[2px] icon icon-tabler icon-tabler-logout" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#e9e9e9c0" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                <path d="M7 12h14l-3 -3m0 6l3 -3" />
              </svg>Log out</h4>
            </div> :

              <div className='usermenu h-full flex flex-col justify-around'>
                <Link to='create-account'><h4 className='h- full cursor-pointer flex items-center text-xl font-reuglar text-[#e9e9e9c0]'><svg xmlns="http://www.w3.org/2000/svg" class="mr-5 icon icon-tabler icon-tabler-user-plus" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#e9e9e9c0" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  <path d="M16 11h6m-3 -3v6" />
                </svg>Create Account</h4></Link>

                <Link to='login'><h4 className='h-full cursor-pointer flex items-center text-xl font-reuglar text-[#e9e9e9c0]'><svg xmlns="http://www.w3.org/2000/svg" class="mr-5 relative left-[2px] icon icon-tabler icon-tabler-login" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#e9e9e9c0" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                  <path d="M20 12h-13l3 -3m0 6l-3 -3" />
                </svg>Login</h4></Link> </div>
            }
          </div></motion.div>)}

          <div onClick={toggleUserMenu} className='flex justify-between items-center cursor-pointer mt-4 rounded-lg bg-[#222222] border border-[#3b3b3b] p-4'>
            <div className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#19976A" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="7" r="4" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>
              <h3 className='text-xl font-regular text-[#e9e9e9] ml-3'>User Name </h3>
            </div>

            <div>
              {userMenu ?
                <svg xmlns="http://www.w3.org/2000/svg" class="usericon relative top-[1px] ml-4 icon icon-tabler icon-tabler-chevron-up" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#818387" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="6 15 12 9 18 15" />
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" class="usericon relative top-[1px] ml-4 icon icon-tabler icon-tabler-chevron-down" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#818387" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="6 9 12 15 18 9" />
                </svg>}
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default SideBar