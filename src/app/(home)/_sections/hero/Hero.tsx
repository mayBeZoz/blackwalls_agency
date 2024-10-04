
import React from 'react'
import ScrollButton from './ScrollButton'
import ParallaxImages from './ParallaxImages'

function Hero() {
    return (
        <section className='h-screen w-full relative'>
            
            <ParallaxImages/>
            
            <div className='absolute overflow-hidden h-full z-20 pt-[300px] w-full top-0 left-0'>
                <div className="container">
                    
                    <div className="flex justify-center items-center">
                        <h1 className='text-[8em] sm:text-[9em] md:text-[10em] lg:text-[13em] xl:text-[16em] text-white/80 leading-[120px] sm:leading-[140px] lg:leading-[170px] xl:leading-[220px] font-vcr-osd-mono flex flex-col'>
                            <span>BUILDS</span>
                            <span className='translate-x-[10%] sm:translate-x-[20%]'>FUTURE</span>
                        </h1>
                    </div>

                    <div className="flex-col mt-10 sm:mt-0 md:flex-row flex justify-between">
                        <ScrollButton/>

                        <p className='font-disket-mono h-fit text-lg mt-12 text-white/80 w-[430px]'>
                            we makes Your brand design as a Memorable experience & relation between design and brand.
                        </p>
                    </div>
                
                </div>
            </div>
        
        </section>
    )
}

export default Hero