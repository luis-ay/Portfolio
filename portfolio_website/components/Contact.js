import React from 'react'
import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin, AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";

const Contact = () => {
  return (
    <div id="contact" className='text-center text-white h-64 font-sfpro'>
        <h1 className='mb-4 text-3xl'>Contact</h1>
        <p className='mb-8'>Feel free to contact me through<br></br> <span className='text-[#319fff] underline underline-offset-2'>email</span> or social media.</p>
        <div className='flex justify-evenly'>
              <a className='scale-150' href="https://github.com/luis-ay">
                  <FiGithub/>
              </a>
              <a className='scale-150' href="www.linkedin.com/in/luis-a-159627118">
                  <AiOutlineLinkedin/>
              </a>
              <a className='scale-150' href="https://facebook.com/luis38ay">
                  <AiOutlineFacebook/>
              </a>
              <a className='scale-150' href="https://www.instagram.com/luis_ay_/">
                  <AiOutlineInstagram/>
              </a>
        </div>
        <p className='font-sfprolight text-xs pt-10'>&copy; All rights reserved.-Designed and Coded by Luis Ayala </p>
    </div>
  )
}

export default Contact