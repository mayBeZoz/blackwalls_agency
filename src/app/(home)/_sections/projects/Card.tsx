import React from 'react'

type TProjectCardProps = {
    name: string;
    imageURL: string;
    description: string;
    id: number;
    isEven: boolean;
    index:number
}

const Card = ({id,imageURL,isEven,index}:TProjectCardProps) => {

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

export default Card