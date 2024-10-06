"use client"

import { Children } from '@/types'
import { motion } from 'framer-motion'
import React from 'react'

function PageTransition({ children }:Children) {
    return (
        <motion.div
            exit={{opacity:0}}
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{
                duration: 0.8,
            }}
            className='w-full h-fit'
        >
            { children }
        </motion.div>
    )
}

export default PageTransition