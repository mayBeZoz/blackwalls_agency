import React from 'react'
import projects from "@/data/projects.json"
import { GoArrowLeft } from 'react-icons/go'
import Link from 'next/link'

type TProjectPageProps = {
    params:{
        projectId:string
    }
}

function ProjectPage({ params }:TProjectPageProps) {
    const { projectId } = params

    const project = projects.find(curr => curr.id === projectId) 
    const description = project?.description || 
    ` Lorem ipsum dolor sit amet consectetur adipisicing 
    elit. Illum sed nam dolore expedita iure! Facilis nobis et soluta modi non? Accusamus reprehende
    rit mollitia tenetur maxime iste unde aperiam, commodi, beatae molestiae veniam rerum nesciunt in
    cidunt, voluptates distinctio dignissimos pariatur dolorem.`



    return (
        <section>
            <div className="container gap-10 flex md:flex-row flex-col relative z-20 h-screen pt-[200px]">

                <div className='w-full md:w-1/2 flex justify-center flex-col md:h-full'>

                    <Link href='/#projects' className="w-[70px] flex justify-center duration-300 hover:text-black hover:bg-white mb-24 items-center aspect-square rounded-full border-white border-2">
                        <GoArrowLeft className='text-4xl '/>
                    </Link>

                    <h2 className='font-vcr-osd-mono uppercase mb-24 text-6xl'>{project?.name}</h2>
                    <p className='w-full text-2xl font-disket-mono'>{description}</p>
                </div>

                <div className='w-full gap-10 flex items-center md:w-1/2 md:h-full'>
                    <img 
                        src={project?.imageURL}                     
                        alt={project?.name} 
                        className='w-full h-[300px] md:h-[400px] object-cover'
                    />

                    <div className='flex items-center justify-between'>
                        
                    </div>
                </div>
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