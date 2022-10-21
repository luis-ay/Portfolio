import NavBar from "./NavBar"
import NavDrawer from "./NavDrawer"
import Link from 'next/link'
import { useCycle } from "framer-motion"
import React from 'react';


const Header = () => {
    const [drawerOpen, setDrawerOpen] = useCycle(false, true)
    
    const handleDrawerOpen = () => {
        setDrawerOpen()
    }

    const hamburgerLine = `h-0.5 w-5 m-0.5 rounded-sm bg-[#e2e2e2] transition ease transform duration-300`;

    return (
        <div className={`sticky top-0 left-0 w-full bg-[#0e0e0e] z-30`}>
            <NavBar/>
            <div className="sticky md:hidden flex align-middle justify-between z-20 bg-[#0e0e0e]">
                <Link href='/'>
                    <h1 className="my-auto ml-3 py-2 text-[#e2e2e2] font-sfpro text-3xl">
                        luis
                        <span className="text-[#319fff]">_ay</span>
                    </h1>
                </Link>
                <button
                    className="flex flex-col my-auto h-8 w-10  justify-center items-center group z-30 md:hidden"
                    onClick={() => handleDrawerOpen()}
                    >
                    <div
                        className={`${hamburgerLine} ${
                        drawerOpen
                            ? "rotate-45 translate-y-2 opacity-100"
                            : "opacity-100"
                        }`}
                    />
                    <div
                        className={`${hamburgerLine} ${
                        drawerOpen ? "opacity-0" : "opacity-100"
                        }`}
                    />
                    <div
                        className={`${hamburgerLine} ${
                        drawerOpen
                            ? "-rotate-45 -translate-y-1 opacity-100"
                            : "opacity-100"
                        }`}
                    />
                </button>
            </div>
            <NavDrawer handleClose={handleDrawerOpen} isVisible={drawerOpen}/>
        </div>
    )
}

export default Header