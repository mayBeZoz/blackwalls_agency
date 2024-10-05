"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

type TStaggeredTextProps = {
    text:string
}

gsap.registerPlugin(ScrollTrigger)
function StaggeredText({text}:TStaggeredTextProps) {

    useGSAP(()=>{
        gsap.fromTo('.heading_char',{
            yPercent:100
        },{
            yPercent:0,
            duration:1,
            scrollTrigger:{
                start:"top center",
                end:"bottom center",
                //scrub:true,
            },
            stagger:.1
        })
    })

    return (
        <>
            {
                
                text.split("").map((char,idx) => (
                    char === " " ?
                    <span key={idx} className="ml-3 inline-block"/>
                    : 
                    <span key={idx} className="overflow-hidden inline-block">
                        <span className="heading_char inline-block">{char}</span>
                    </span>
                ))
                
            }
        </>
    )
}

export default StaggeredText