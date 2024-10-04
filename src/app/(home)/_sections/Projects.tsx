'use client'

import { useLayoutEffect, useRef } from "react"
import projects from "@/data/projects.json"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { TProject } from "@/types"

gsap.registerPlugin(ScrollTrigger)

type TProjectCard = {
    name: string;
    imageURL: string;
    description: string;
    id: number;
    isEven: boolean;
}

const ProjectCard = ({id,imageURL,isEven}:TProjectCard) => {

    const randomElevationPercent = Math.round(Math.random() * 5)
    const card = useRef<HTMLDivElement>(null)

    useLayoutEffect(()=>{
        gsap.fromTo(card.current,{
            yPercent:0
        },{
            yPercent:randomElevationPercent,
            scrollTrigger:{
                trigger:card.current,
                start:"top 60vh",
                end:"bottom top",
                scrub:1.5,
                pin:true,
            }
        })
    },[])

    return (
        <div 
            ref={card}
            className="w-[150px] h-[200px] md:w-[200px] md:h-[270px] lg:w-[300px] lg:h-[400px] bg-zinc-400" 
            key={id}
            style={{
                margin:isEven ? "0 auto 0 0" : "0 0 0 auto"
            }}
        >
            <img 
                className="w-full hover:[filter:grayscale(1)] duration-300 h-full block object-cover" 
                src={imageURL} 
                alt="img" 
            />
        </div>
    )
}

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
                end:"+=2000px",
                scrub:true,
                pin:true,
            }
        })
    },[])
    
    const coupleProjects : TProject[][] = []  
    projects.forEach((curr,idx) => {
        if (!(idx % 2 !== 0)) 
            coupleProjects.push([curr,projects[idx+1]])
    })

    return (
        <section ref={section} className='h-screen overflow-hidden relative'>
            <div className="container h-full flex justify-center items-center">
                <h3 className='text-8xl font-vcr-osd-mono uppercase text-center'>blackwall is your compass in real estate</h3>
            </div>
            <div ref={projectImagesWrapper} className="absolute w-full z-20 top-[100%] ">
                <div className="container">
                    {
                        coupleProjects.map((couple,idx) => {
                            const isEven = idx % 2 === 0
                            return (
                                <div key={idx} className="w-full mb-52 flex">
                                    {
                                        couple.map(project => (
                                            <ProjectCard key={project.id} isEven={isEven} {...project}/>
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