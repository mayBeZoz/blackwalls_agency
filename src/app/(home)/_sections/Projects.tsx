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
    index:number
}

const ProjectCard = ({id,imageURL,isEven,index}:TProjectCard) => {

    return (
        <div 
            className="w-[150px] h-[200px] md:w-[200px] md:h-[270px] lg:w-[300px] lg:h-[400px] bg-zinc-400" 
            key={id}
            style={{
                margin:isEven ? "0 auto 0 0" : "0 0 0 auto",
                marginTop:(index % 2 === 0) ? "4em" : "14em"
            }}
        >
            <img 
                className="w-full duration-300 h-full block object-cover" 
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
            yPercent:100
        },{
            yPercent:-125,
            ease:"power1.inOut",
            duration:4,
            scrollTrigger:{
                trigger:section.current,
                start:"bottom bottom",
                end:"+=4000px",
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
            <div ref={projectImagesWrapper} className="absolute w-full z-20 ">
                <div className="container">
                    {
                        coupleProjects.map((couple,idx) => {
                            const isEven = idx % 2 === 0
                            return (
                                <div key={idx} className="w-full mb-52 flex">
                                    {
                                        couple.map((project,index) => (
                                            <ProjectCard index={index} key={project.id} isEven={isEven} {...project}/>
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