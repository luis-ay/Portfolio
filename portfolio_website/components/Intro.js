import React from 'react'
import Typewriter from 'typewriter-effect'

const Intro = () => {
  return (
    <div className='h-screen md:h-96 w-full text-[#e2e2e2] p-10 md:indent-36 md:my-20 z-0 flex'>
      <div className='mt-20'>
        <h1 className='text-3xl md:text-5xl font-sfprolight'>Hello,</h1>
        <h1 className='text-3xl md:text-5xl my-4 font-sfprolight'>I'm <span className='font-sfpro text-4xl'>&nbsp;Luis</span></h1>
        <div className='text-6xl text-[#319fff] font-sfpro'>
            <Typewriter className='z-0'
            options={{
                strings: ['Software Engineer', 'Fullstack Engineer', 'Student'],
                autoStart: true,
                loop: true,

            }}
            />
        </div>
      </div>
    </div>
  )
}

export default Intro