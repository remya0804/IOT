import React from 'react'
import logo from '../assets/logo.png'

import { IoMdHome } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { GiWaterRecycling } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

  const navigate = useNavigate()

  return (
        <div className=' bg-white  px-[3%] py-4 flex items-center justify-between '>
          {/* bg-gradient-to-r from-[#020024] via-[#090979] to-[#00d4ff] */}
            
            {/* <div>
                <p className='text-2xl font-bold'>IOT Dashboard</p>
                <div className='flex items-center gap-2'>
                  <div className='w-[50px] h-0.5 bg-white'></div>
                  <p className='text-sm'>by Hydroleap Pte Ltd</p>
                </div>
                

            </div>
            <div>
                <p className='text-2xl font-semibold'>Water Flow Monitoring</p>
            </div> */}
            <div>
              <img className='w-34 ' src={logo} alt="" />
            </div>

            <div className='flex items-center gap-8 text-lg font-medium' >                    
              <div className='text-[#150f7c] flex items-center gap-1 cursor-pointer hover:bg-slate-200 px-2 py-1 rounded' onClick={() => navigate('/')}>
                <IoMdHome />
                <p>Home</p>
              </div>
              <div className='text-[#150f7c] flex items-center gap-1 cursor-pointer hover:bg-slate-200 px-2 py-1 rounded' onClick={() => navigate('/dashboard')}>
                <MdDashboard />
                <p>Dashboard</p>
              </div>
              <div className='text-[#150f7c] flex items-center gap-1 cursor-pointer hover:bg-slate-200 px-2 py-1 rounded' onClick={() => navigate('/plant')}>
                <GiWaterRecycling className='text-[#150f7c]' />
                <p>Plant</p>
              </div>
              
            </div>

            <div className='flex items-center gap-8 '> 
              <div className='text-[#150f7c] flex items-center gap-1 text-lg font-medium cursor-pointer hover:bg-slate-200 px-2 py-1 rounded' onClick={() => navigate('/profile')}>
                <FaCircleUser className='text-[#150f7c]' />
                <div>
                <p className='text-[#150f7c]'>Profile</p>
                </div>
              </div>
              <p className='px-6 text-sm py-2 rounded cursor-pointer bg-[#150f7c] text-white'>Logout</p>
            </div>
        </div>
  )
}

export default Navbar