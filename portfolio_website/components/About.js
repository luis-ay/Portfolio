import React from 'react'
import Image from 'next/image'
import photo from '../public/aboutPic.png'

const About = () => {
  return (
    <div id="about" className=' text-white mx-4 mb-16 md:m-28 h-auto  scroll-mt-16 md:scroll-mt-32'>
      <div className='bg-[#2d2d2d] rounded-3xl p-6 md:inline-flex align-middle'>
        <h1 className='text-2xl mb-2 font-sfpro'>About Me</h1>
        <p className='text-md lg:leading-10 lg:w-4/5 my-auto font-sfprolight tracking-wide text-lg mb-2'>Hi, my name is Luis and I'm a software engineer based in Los Angeles, California. I recently graduated from the University of Pennsylvania with a Bachelors of Science in Engineering in Computer Science. <br></br> <br></br> I'm currently looking for opportunities to grow and learn new skills. I have several projects under my belt and experience in a variety of widely used technologies. </p>
        <Image src={photo} alt="Picture" className="scale-100 rounded-xl pt-4"/>
      </div>
    </div>
  )
}

export default About