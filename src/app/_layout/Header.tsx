'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <motion.header 
            initial={{y:'-100%'}}
            animate={{y:0}}
            transition={{
                duration:.8,
                delay:1,
                ease:"easeOut"
            }}
            className='w-full backdrop-blur-xl fixed z-30 top-0 left-0 pb-2 pt-5'
        >
            <nav className="container h-[50px] flex justify-between items-center">

                <Link href='/' className='font-vcr-osd-mono text-lg'>HOME</Link>
                
                <h1 className='text-2xl sm:text-4xl font-disket-mono'>BlackWall</h1>

                <Link href='/contact' className='font-vcr-osd-mono text-lg'>CONTACT</Link>

            </nav>
        </motion.header>
    )
}

export default Header