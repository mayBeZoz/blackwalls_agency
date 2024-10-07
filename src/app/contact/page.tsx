import Background from "./Background"

function Contact() {
    const email = "blackwall@dummy.xyz"
    return (
        <section>
            <div className="container relative pt-[150px] h-screen">
                <Background/>
                <div className="w-full container relative z-10 flex flex-col items-center h-full">
                    <h3 className="font-vcr-osd-mono mt-14 text-6xl md:text-8xl text-center uppercase">Lets Talk!</h3>
                    <a 
                        href={`mailto:${email}`} 
                        className="
                            text-4xl hover:opacity-80 duration-200
                            md:text-5xl lg:text-7xl mt-20 relative before:absolute before:w-full 
                            before:h-[2px] before:bg-white before:bottom-0 font-disket-mono
                        "
                    >{email}</a>
                

                </div>
            </div>
        </section>
    )
}

export default Contact