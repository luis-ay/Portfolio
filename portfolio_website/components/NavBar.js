import { motion } from "framer-motion"
import Link from 'next/link'
import React from 'react';


const NavBar = () => {
    return (
        <nav className="navbar hidden xl:flex align-middle justify-between space-x-10 p-4 text-white font-sfpro">
            <Link href='/'>
                <h1 className="my-auto ml-3 py-2 text-[#e2e2e2] text-3xl hover:cursor-pointer">
                        luis
                        <span className="text-[#319fff]">_ay</span>
                </h1>
            </Link>
            <div className="w-5/12 flex justify-between my-auto text-xl pr-8">
                <motion.button className="p-2 bg-[#2d2d2d] rounded-xl" whileHover={{scale:1.05}}>
                    <Link  href="/">
                        <a className="opacity-80 hover:opacity-100">Resume</a>
                    </Link>
                </motion.button>
                <Link scroll={false} href="#about">
                    <a className="opacity-80 hover:opacity-100 py-2">About</a>
                </Link>
                <Link scroll={false} href="#projects">
                    <a className="opacity-80 hover:opacity-100 py-2">Projects</a>
                </Link>
                <Link scroll={false} href="#skills">
                    <a className="opacity-80 hover:opacity-100 py-2">Skills and Tech</a>
                </Link>
                <Link scroll={false} href="#contact">
                    <a className="opacity-80 hover:opacity-100 py-2">Contact</a>
                </Link>
            </div>
        </nav>
    )
}

export default NavBar