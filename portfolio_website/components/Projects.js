import React from 'react'
import castitPic from '../public/castit.netlify.app_(iPhone SE).png'
import BotBiasPic from '../public/CIS401_poster.pptx.png'
import TransparencyPic from '../public/Transparency.png'
import UpennPic from '../public/cropped-Penn-Engg.png'
import Image from 'next/image'


function Projects() {
  return (
    <div id="projects" className=' text-white mx-4 mb-16 md:m-28 h-auto  scroll-mt-16 md:scroll-mt-32'>
      <h1 className='text-2xl mb-2 font-sfpro'>Projects</h1>
      <div id='castit' className='bg-[#2d2d2d] rounded-xl p-6 md:inline-flex align-middle'>
        <h1 className='text-xl mb-2 font-sfpro'>CastIt</h1>
        <p className='text-md lg:leading-10 lg:w-4/5 my-auto font-sfprolight tracking-wide text-lg mb-2'>CastIt is a web app that allows users to create and share ranked-voting elections. It can be used to simplify group decisions and offers a more equitable alternative to usual voting methods.</p>
        <Image src={castitPic} alt='CastIt' className='rounded-xl'/>
        <h1 className='mx-auto underline text-md font-sfpro underline-offset-2'>Stack</h1>
        <p className='text-[#319fff]'>React, NodeJS, Express, Redux Toolkit, MongoDB </p>
      </div>

      <div id='Botbias' className='bg-[#2d2d2d] rounded-xl p-6 md:inline-flex align-middle mt-6'>
        <h1 className='text-xl mb-2 font-sfpro'>BotBias</h1>
        <p className='text-md lg:leading-10 lg:w-4/5 my-auto font-sfprolight tracking-wide text-lg mb-2'>Web app that uses Twitter API and pretrained NLP model to let users see if their twitter network contains bot accounts. Provides metrics on said accounts including political leaning and timeline of bot-like activity.</p>
        <Image src={BotBiasPic} alt='botbias' className='rounded-xl'/>
        <h1 className='mx-auto underline text-md font-sfpro underline-offset-2'>Stack</h1>
        <p className='text-[#319fff]'>Python (data cleansing), Django, HuggingFace API, Twitter API, </p>
      </div>

      <div id='Transparency' className='bg-[#2d2d2d] rounded-xl p-6 md:inline-flex align-middle mt-6'>
        <h1 className='text-xl mb-2 font-sfpro'>Transparency</h1>
        <p className='text-md lg:leading-10 lg:w-4/5 my-auto font-sfprolight tracking-wide text-lg mb-2'>Web app that provides detailed data on the campaign financing for members of U.S. congress.</p>
        <Image src={TransparencyPic} alt='Transparency' className='rounded-xl'/>
        <h1 className='mx-auto underline text-md font-sfpro underline-offset-2'>Stack</h1>
        <p className='text-[#319fff]'>React, Express, Python (data scraping and cleansing), Oracle DB, AWS</p>
      </div>

      <div id='PennOS' className='bg-[#2d2d2d] rounded-xl p-6 md:inline-flex align-middle mt-6'>
        <h1 className='text-xl mb-2 font-sfpro'>PennOS</h1>
        <p className='text-md lg:leading-10 lg:w-4/5 my-4 font-sfprolight tracking-wide text-lg mb-2'>Unix-based operating system. Simple shell with foreground and background processes, job control, synchronous child waiting, as well as typical built-in functions (cat, nice, sleep, etc.).</p>
        <Image src={UpennPic} alt='Penn' className='rounded-xl scale-[0.4] my-2'/>
        <h1 className='mx-auto underline text-md font-sfpro underline-offset-2'>Programmed fully in <span className='text-[#319fff]'>C</span></h1>
      </div>
    </div>
  )
}

export default Projects