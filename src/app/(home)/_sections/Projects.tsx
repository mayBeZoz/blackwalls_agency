'use client'

import { useLayoutEffect, useRef } from "react"
import projects from "@/data/projects.json"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

function Projects() {
    
    const projectImagesWrapper = useRef<HTMLDivElement>(null)
    const section = useRef<HTMLDivElement>(null)

    useLayoutEffect(()=>{
        gsap.fromTo(projectImagesWrapper.current,{
            top:'100%'
        },{
            top:"-100%",
            duration:4,
            scrollTrigger:{
                trigger:section.current,
                start:"bottom bottom",
                // end:"+=1000px",
                scrub:true,
                pin:true,
            }
        })
    },[])

    return (
        <section ref={section} className='h-screen overflow-hidden relative'>
            <div className="container relative z-10 h-full flex justify-center items-center">
                <h3 className='text-8xl font-vcr-osd-mono uppercase text-center'>blackwall is your compass in real estate</h3>
            </div>
            <div ref={projectImagesWrapper} className="absolute w-full bg-slate-200 h-[1000px] z-0 top-[100%] left-0">
                {/* {
                    projects.map((project) => (
                        <div className="" key={project.id}>

                        </div>
                    ))
                } */}
            </div>
        </section>
    )
}

export default Projects