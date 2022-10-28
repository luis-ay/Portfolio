import '../styles/globals.css'
import React from 'react'
import Header from '../components/Header'
import Intro from '../components/Intro'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Head from 'next/head'

const App = () => {
  return (
    <div className='bg-[#0e0e0e] w-full scroll-smooth'>
      <Head>
        <title>Luis Ayala</title>
        <meta name='theme-color' content="#319fff"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"></meta>
        <meta name='description' content="Portfolio Website for Luis Ayala Software Engineer"/>
        <meta name='og:description' content="Portfolio Website for Luis Ayala Software Engineer"/>
      </Head>
      <Header/>
      <Intro/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default App