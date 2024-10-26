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
        <section className='relative lg:pt-0 pt-[200px] py-6'>
            <div className="container gap-10 flex lg:flex-row flex-col min-h-screen relative z-20 ">

                <div className='w-full lg:w-1/2 flex justify-center flex-col'>
                    <div className='w-full'>
                        <Link href='/#projects' className="w-[70px] flex justify-center duration-300 hover:text-black hover:bg-white mb-24 items-center aspect-square rounded-full border-white border-2">
                            <GoArrowLeft className='text-4xl '/>
                        </Link>

                        <h2 className='font-vcr-osd-mono uppercase mb-24 text-6xl'>{project?.name}</h2>
                        <p className='w-full text-xl sm:text-2xl font-disket-mono '>{description}</p>
                    </div>
                </div>

                <div className='w-full gap-10 flex items-center mx-auto sm:w-2/3 lg:w-1/2'>
                    <img 
                        src={project?.imageURL}                     
                        alt={project?.name} 
                        className='w-full h-[300px] lg:h-[400px] object-cover'
                    />
                </div>
            </div>
            <div className="absolute top-0 left-0 z-10 w-full h-full">
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