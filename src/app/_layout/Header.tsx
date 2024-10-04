import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <header className='w-full backdrop-blur-xl fixed z-30 top-0 left-0 pb-2 pt-5'>
            <nav className="container h-[50px] flex justify-between items-center">

                <Link href='/' className='font-vcr-osd-mono text-lg'>HOME</Link>
                
                <h1 className='text-2xl sm:text-4xl font-disket-mono'>BlackWall</h1>

                <Link href='/contact' className='font-vcr-osd-mono text-lg'>CONTACT</Link>

            </nav>
        </header>
    )
}

export default Header