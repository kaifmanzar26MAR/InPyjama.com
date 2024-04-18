import React from 'react'

const About = () => {
  return (
    <div className='min-h-fit '>
      <div className='hero_view h-[60vh] lg:h-screen w-full  sm-md:h-[29vh] bg-white relative flex '>
        <img src="https://tagmango.com/staticassets/-img_73252-1a86622b2eab5961e905cfd188bb1580.jpg" alt=""  className='h-full w-full object-cover pt-14'/>
        
        <div className='absolute font-semibold text-2xl flex w-full justify-center items-center flex-col bottom-5 text-white'>
          <p>Our Team</p>
          <p className='text-center'>Piyush Itankar, Dev Bishnoi, Rajat Batra, Mahmad Bharmal, Wasim Akram</p>
        </div>
      </div>


    </div>
  )
}

export default About
