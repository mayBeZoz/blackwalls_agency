import React from 'react'
import projects from "@/data/projects.json"

type TProjectPageProps = {
    params:{
        projectId:string
    }
}

function ProjectPage({ params }:TProjectPageProps) {
    const { projectId } = params

    const project = projects.find(curr => curr.id === projectId) 
    
    return (
        <section>
            <div className="container relative z-20 h-screen pt-[200px]">

                <h2 className='text-9xl font-vcr-osd-mono uppercase'>{project?.name}</h2>

            </div>
            <div className="absolute top-0 left-0 z-10 w-full h-screen">
                <img 
                    className='w-full h-full blur-sm object-cover'
                    src={project?.imageURL} 
                    alt={project?.name} 
                />
                <div className="w-full h-full z-10 top-0 left-0 absolute bg-black/50" />
            </div>
        </section>
    )
}

export default ProjectPage