import React from 'react'

function Contact() {
  return (
    <section id='contact' className='flex flex-col  bg-primary py-20'>
      <hr className=' border-orange-600 border-2 mt-[50px] mb-[15px] '/>
    <div className='flex  flex-col items-center'>
      
     <h1 className='text-white border-b-2 text-4xl mb-5 w-[150px] font-bold'>Contacts</h1> 
      <p className='text-orange-600 text-justify pr-10'>
          If you want to discuss more details, please contact me</p>
          <div className='text-white'>
          <p> <span className='font-bold'> Email :</span> sathurshans04@gmail.com</p>
          <p><span className='font-bold'> Phone:</span> 0755284975</p>
          </div>
     </div>
   
  </section>
  )
}

export default Contact
