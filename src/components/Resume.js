import React from 'react'
import '../App.css'
import cv from '../assets/cv.jpeg'
function Resume() {
  return (
    <section id='resume' className='flex flex-col md:flex-row bg-primary'>
    <div className=' md:w-1/2 md:pl-20 px-[150px] py-10  flex justify-center'>
      <img  src={cv} className='flex justify-center md:justify-end  md:h-[250px]' />
    </div>

    <div className=' md:pl-5 flex md:justify-start md:w-1/2 px-10 mt-[15px]'>
    <div className='flex flex-col justify-center'>
     <h1 className='text-white border-b-2 text-4xl mb-5 w-[190px] font-bold'>Resume</h1> 
      <p className='text-orange-600 text-justify pr-10'>
          You can download my resume below.</p>
          <a href='#' className='btn mt-2'>Download</a>
     </div>
      </div>
  </section>
  )
}

export default Resume
