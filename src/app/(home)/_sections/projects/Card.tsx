import Link from 'next/link';
import React from 'react'
import { FaEye } from 'react-icons/fa';

type TProjectCardProps = {
    name: string;
    imageURL: string;
    description: string;
    id: string;
    isEven: boolean;
    index:number
}

const Card = ({id,imageURL,isEven,index}:TProjectCardProps) => {

    return (
        <Link
            href={`/projects/${id}`} 
            className="w-[150px] relative h-[200px] md:w-[200px] md:h-[270px] lg:w-[300px] lg:h-[400px] bg-zinc-400" 
            key={id}
            style={{
                margin:isEven ? "0 auto 0 0" : "0 0 0 auto",
                marginTop:(index % 2 === 0) ? "4em" : "14em"
            }}
        >
            <div className="absolute top-0 gap-2 flex flex-col justify-center items-center left-0 duration-300 hover:opacity-100 opacity-0 backdrop-blur-sm z-20 w-full h-full">
                <FaEye className='text-4xl'/>
                <p className='text-center font-disket-mono'>click to visit</p>
            </div>
            <img 
                className="w-full grayscale-[0] hover:grayscale-0 duration-300 h-full block object-cover" 
                src={imageURL} 
                alt="img" 
            />
        </Link>
    )
}

export default Card