import React from 'react'
import '../App.css'
import backEnd from'../assets/backEnd.jpg'
import frontEnd from'../assets/frontEnd.jpg'
import graphicDesign from '../assets/graphicDesign.jpg'
function Projects() {
  const config = {
    projects:[
      {
        image:frontEnd,
        description:'Student management system buid by WPF',
        link:'https://github.com/Shathursan99/SudentManagementSystem'
      },
      {
        image:backEnd,
        description:'Point of sale system',
        link:'https://github.com/Shathursan99/SudentManagementSystem'
      },
      {image:graphicDesign,
        description:'Online Ad posting',
        link:'https://github.com/Shathursan99/SudentManagementSystem'}
    ]
  }
  return (
    <section id='project' className='bg-secoundary flex flex-col  py-5 text-white'>
      
      <div className='w-full mb-[20px]'>
        <div className='flex flex-col px-10'>
        <h1 className='text-3xl font-bold border-b-2 w-[120px]'>Projects</h1><br/>
        <p className='mb-5'>There are some of my projects workout. I have built these projects with WPF, React, css, Bootstrap and Tail-wind. check them out </p>
        </div>
      </div>

      <div className=' mb-[20px] flex justify-center px-10 '>
      <div  className=' flex flex-col md:flex-row gap-5 '>
        {config.projects.map((project) => (
         
              <div className='relative'> 
              <img src={project.image} className='h-[250px] w-[250px] '/>
              <div className='absolute left-0 right-0 bottom-0 top-0  h-[250px] bg-project opacity-0 duration-500 hover:opacity-100 '>
                  <p className=' text-center px-5 py-10 text-white'>{project.description}</p>
                 <div className='flex justify-center'>
                  <a href={project.link} target='_blank' className='btn text-center'>View </a>
                </div>
              </div>
             
              </div>  
          ))
        }
        

      
        </div>
          
      </div>
      
    </section>
  )
}

export default Projects
