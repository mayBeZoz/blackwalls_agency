'use client'

import { ContextSafeFunc, useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)
function ParallaxImages() {
    const leftImg = useRef<HTMLDivElement>(null) 
    const rightImg = useRef<HTMLDivElement>(null) 


    useGSAP((_,contextSafe)=>{
        const left = leftImg.current
        const right = rightImg.current

        const handleMouseMove = (contextSafe as ContextSafeFunc)((e:MouseEvent)=>{
            const x = (e.clientX / window.innerWidth) - 0.5
            const y = (e.clientY / window.innerHeight) - 0.5

            gsap.to(left,{
                x: `${x * 20}%`,
                y: `${y * 14}%`,
                duration:2,
                rotate:(9+x)*1.25
            })

            gsap.to(right,{
                x: `-${x * 25}%`,
                y: `-${y * 18}%`,
                duration:2,
                rotate:-(6+x)*1.25
            })
        }) 

        gsap.to([left,right],{
            scrollTrigger:{
                scrub:true,
                start:"top top"
            },
            opacity:0
        })

        gsap.fromTo([left,right],{
            yPercent:0
        },{
            yPercent:10,
            repeat:-1,
            yoyo:true,
            duration:4,
            ease:"power1.inOut",
        })

        if (left && right) {
            document.addEventListener("mousemove",handleMouseMove)
        }

        return () => document.removeEventListener("mousemove",handleMouseMove)
        
    })


    return (
        <div className='w-full container h-full relative'>

            <div 
                className="rotate-[9deg] absolute left-[30px] md:left-[70px] top-[144px] lg:left-[140px] xl:left-[180px]" 
                ref={leftImg}
            >
                <img 
                    src="/images/home-left.png" 
                    alt="left image" 
                    className="block w-[110px] h-[170px] sm:w-[160px] sm:h-[250px] lg:w-[230px] lg:h-[350px] object-cover"
                />
            </div>

            <div 
                className="-rotate-6 absolute md:right-[50px] right-[30px] top-[370px] sm:top-[270px] lg:right-[80px] xl:right-[100px]" 
                ref={rightImg}
            >
                <img 
                    src="/images/home-right.png" 
                    alt="right image" 
                    className="block w-[120px] h-[220px] sm:w-[170px] sm:h-[310px] lg:w-[230px] lg:h-[415px] object-cover"
                />
            </div>
        </div>
    )
}

export default ParallaxImages