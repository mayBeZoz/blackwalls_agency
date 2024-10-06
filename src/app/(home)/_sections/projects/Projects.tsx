'use client'

import { useRef } from "react"
import projects from "@/data/projects.json"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { TProject } from "@/types"
import { useGSAP } from "@gsap/react"
import Card from "./Card"

gsap.registerPlugin(ScrollTrigger)



function Projects() {
    
    const projectImagesWrapper = useRef<HTMLDivElement>(null)
    const section = useRef<HTMLDivElement>(null)
    const coupleProjects : TProject[][] = []  
    projects.forEach((curr,idx) => {
        if (!(idx % 2 !== 0)) 
            coupleProjects.push([curr,projects[idx+1]])
    })

    useGSAP(()=>{
        gsap.fromTo(projectImagesWrapper.current,{
            yPercent:0
        },{
            yPercent:-100,
            ease:"power1",
            scrollTrigger:{
                trigger:section.current,
                start:"bottom bottom",
                end:"+=3000px",
                scrub:true,
                pin:true,
            }
        })
    })
    


    return (
        <section ref={section} className='h-screen overflow-hidden relative'>

            <div className="container h-full flex justify-center items-center">
                <h3 className='text-8xl flex-wrap font-vcr-osd-mono uppercase text-center'>
                    blackwall is your compass in real estate                
                </h3>
            </div>

            <div ref={projectImagesWrapper} className="absolute w-full z-20 ">
                <div className="container">
                    {
                        coupleProjects.map((couple,idx) => {
                            const isEven = idx % 2 === 0
                            return (
                                <div key={idx} className="w-full mb-52 flex">
                                    {
                                        couple.map((project,index) => (
                                            <Card index={index} key={project.id} isEven={isEven} {...project}/>
                                        ))
                                    }
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        </section>
    )
}

export default Projects