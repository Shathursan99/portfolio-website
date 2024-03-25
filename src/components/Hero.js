import React from 'react'
import '../App.css'
import profileimg from  '../assets/frontEnd.jpg'
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

function hero() {

  const config = {
    subtitle:"full stack developer & Graphic designer"
  }

  return (
    <div className='flex flex-col md:flex-row  pl-20 py-32 bg-primary text-white'>
      <div className='w-1/2 flex-col'>
      <h1 className='text-3xl font-name-font   mb-2'>Hi, I'm <br/>
      <span className='text-orange-600 border-b-2 '> Shathursan Rasalingam.</span>
      <p className='text-xs'>{config.subtitle}</p>
      </h1>
      <p className='text-sm text-white '>BscEng in computer engineering
        <br/> University of Ruhuna
      </p>
      
      <div className='flex py-5'>
        <a href='https://github.com/Shathursan99' target='_blank' className='pr-5 text-2xl text-black hover:text-white ' ><IoLogoGithub /></a>
        <a href='linkedin.com/in/shathursan-rasalingam-8066b6288' target='_blank' className=' text-2xl text-black hover:text-white'><IoLogoLinkedin/></a>
      </div>

      </div>
      <div className='flex justify-center md:flex '>
      <img src={profileimg} className=' w-1/2 md:w-1/3 pl-100 '/>
    </div>
    </div>
    
  )
}
 
export default hero
