"use client"

import { Children } from '@/types'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

function PageTransition({ children }:Children) {

    const page = useRef<HTMLElement>(null)

    useGSAP(()=>{
        gsap.fromTo(page.current,{
            opacity:0
        },{
            opacity:1,
            duration:0.8,
            ease:"power1.inOut"
        })
    })
    return (
        <main ref={page}>
            { children }
        </main>
    )
}

export default PageTransition