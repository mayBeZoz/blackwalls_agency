"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

function Background() {
    
    const bg = useRef<HTMLDivElement>(null)

    useGSAP(()=>{
        gsap.fromTo('.txt',{
            yPercent: 0,
        },{
            yPercent: -100,
            repeat: -1,
            duration:3,
            ease: "none",
        })
    },{scope:bg})
    
    return (
        <div ref={bg} className="h-full pt-[150px] pb-[70px] absolute left-0 bottom-0 w-full">
            <div className="w-full h-full overflow-hidden">
                <ul className="h-full w-full flex flex-col ">
                    {
                        Array(15).fill("get in touch").map((curr,idx)=> (
                            <li className="text-7xl sm:text-8xl md:text-[8em] lg:text-[11em] txt opacity-15 md:leading-[120px] lg:leading-[140px] text-center text-nowrap uppercase font-vcr-osd-mono" key={idx}>
                                {curr}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Background