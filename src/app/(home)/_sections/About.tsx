import React from 'react'

const experience = [
    {
        title:"100+",
        subTitle:"completed projects"
    },
    {
        title:"19",
        subTitle:"years in market"
    },
    {
        title:"23",
        subTitle:"experienced engineers"
    },
]

type TExperienceCard = {
    title:string,
    subTitle:string,
    order:number
}

const Card = ({ title, subTitle, order }:TExperienceCard) => {
    const className = order == 1 ? "bg-white text-black" : "text-white"
    const margin = (order % 2 == 0) ? `calc(100%/${experience.length}) 0 0 0` : `0 0 calc(100%/${experience.length}) 0`
    return (
        <div 
            style={{
                width:`calc(100%/${experience.length})`,
                margin
            }} 
            className={`items-end flex uppercase border-white border-2 p-4 aspect-square font-vcr-osd-mono ${className}`}
        >
            <div>
                <h4 className='text-5xl md:text-8xl xl:text-6xl mb-2'>{title}</h4>
                <p className='text-xl md:text-3xl xl:text-xl'>{subTitle}</p>
            </div>
        </div>
    )
}


function About() {
    const bio = `
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita qu
        ibusdam quo ipsam dolorem, a inventore quisquam amet laborum tempora 
        dignissimos veniam error ducimus rerum deserunt. Pariatur, laboriosam quia nisi ipsum,
        sint repellat et eos consectetur, nemo voluptatibus vel? Quis doloremque debitis facere hic
        eveniet nemo cupiditate ex ipsam, suscipit temporibus?
    `
    return (
        <section className='my-20' id='about'>
            <div className="container gap-20 xl:gap-10 h-full xl:flex-row flex flex-col">
                <div className='xl:w-1/2 w-full h-full'>
                    <h2 className='text-6xl font-vcr-osd-mono uppercase mt-52'>about us</h2>
                    <p className='font-disket-mono mt-28 text-xl md:text-2xl xl:text-lg xl:mt-52'>{bio}</p>
                </div>
                <div className='mt-auto ml-auto xl:w-1/2 h-fit flex text-3xl w-full'>
                    {
                        experience.map((exp, index) => <Card key={index} {...exp} order={index+1} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default About