import React from 'react'
import '../App.css'


import profile from '../assets/pro.jpg'
function About() {
  const config = {
    line1:  "Enthusiastic and versatile aspiring software engineer with a passion for crafting innovative solutions and captivating designs.",
    line2: "I am proficient in Frontend skills like React.js, Redux, Redux Tool Kit, Axios, Tailwind  CSS, Sass, Css3 and many more.",
    line3:"In backend I know Node.js, Express.js, MongoDB"
  }
  return (
    <section id='about' className='flex flex-col md:flex-row bg-primary' >
      <div className=' md:w-1/2 md:pl-20 px-[150px] py-10  flex justify-center'>
        <img  src={profile} className='flex justify-center md:justify-end  md:h-[250px]' />
      </div>

      <div className=' md:pl-5 flex md:justify-center md:w-1/2 px-10 mt-[15px]'>
       <div className='flex flex-col justify-center'>
       <h1 className='text-white border-b-2 text-4xl mb-5 w-[190px] font-bold'>About me</h1> 
        <p className='text-orange-600 text-justify pr-10'>{config.line1}   </p>
            < p className='text-orange-600 text-justify pr-10 mt-[10px]'> {config.line2}</p>
            <p className='text-orange-600 text-justify pr-10 mt-[10px]'>{config.line3}</p>
       </div>
      </div>
    </section>
  )
}

export default About
