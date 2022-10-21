import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react';
import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin, AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";

const NavDrawer = ({handleClose, isVisible}) => {

    const slideIn = {
        hidden: {
            y: '-150vh',
            opacity: 1,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                when: 'beforeChildren',
                type: 'Tween',
                duration: 0.5,
                staggerChildren: 0.05
            }
        },
        exit: {
            y: '-150vh',
            opacity: 1,
            transition: {
                type: "Tween",
                when: "afterChildren",
                duration:0.3,
                staggerChildren:0.05
            }
        }
    }
    
    const phaseIn = {
        hidden: {
            opacity: 0,
            y:-10
        },
        visible: {
            opacity:1,
            y:0,
            transition: {
                duration: 0.3
            }
        },
        exit: {
            opacity:0,
            y:-10,
            transition: {
                duration: 0.2
            }
        }
    }

    return (
        <AnimatePresence >
            { isVisible && (
                    <motion.ul className="absolute w-screen h-screen bg-[#121212] py-8 z-10 flex-col text-2xl tracking-wide text-white font-sfprolight space-y-10"
                        variants={slideIn}
                        initial='hidden'
                        animate='visible'
                        exit='exit'
                        >
                        <motion.li className='pl-10 text-white z-15' variants={phaseIn}>
                            <Link scroll={false} href="#about" >
                                <a onClick={handleClose}>About Me</a>
                            </Link>
                        </motion.li>
                        <motion.li className='pl-10 text-white z-15' variants={phaseIn}>
                            <Link scroll={false} href="#skills" >
                                <a className='text-white z-25' onClick={handleClose}>Skills and Technologies</a>
                            </Link>
                        </motion.li>
                        <motion.li scroll={false} className='pl-10 text-white z-15' variants={phaseIn}>
                            <Link href="#projects" >
                                <a onClick={handleClose}>Projects</a>
                            </Link>
                        </motion.li>
                        <motion.li className='pl-10 text-white z-15' variants={phaseIn}>
                            <Link href="#contact">
                                <a onClick={handleClose}>Contact</a>
                            </Link>
                        </motion.li>
                        <motion.li className='flex justify-evenly text-white z-15' variants={phaseIn}>
                            <a onClick={handleClose} href="https://github.com/luis-ay">
                                <FiGithub/>
                            </a>
                        
                            <a onClick={handleClose} href="www.linkedin.com/in/luis-a-159627118">
                                <AiOutlineLinkedin/>
                            </a>
                        
                            <a onClick={handleClose} href="https://facebook.com/luis38ay">
                                <AiOutlineFacebook/>
                            </a>
                        
                            <a onClick={handleClose} href="https://www.instagram.com/luis_ay_/">
                                <AiOutlineInstagram/>
                            </a>
                        </motion.li>
                    </motion.ul>
        )}
        </AnimatePresence>
    )
}


export default NavDrawer