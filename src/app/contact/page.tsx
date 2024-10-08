import Background from "./_components/Background"
import ContactForm from "./_components/ContactForm"

function Contact() {
    const email = "blackwall@dummy.xyz"
    return (
        <section>
            <div className="container relative pb-[70px] pt-[150px]">
                <Background/>
                <div className="w-full container pb-20 relative z-10 flex flex-col items-center h-full">
                    <h3 className="font-vcr-osd-mono mt-14 text-6xl md:text-8xl text-center uppercase">Lets Talk!</h3>
                    <a 
                        href={`mailto:${email}`} 
                        className="
                            text-4xl hover:opacity-80 duration-200
                            md:text-5xl lg:text-7xl mt-20 relative before:absolute before:w-full 
                            before:h-[2px] mb-24 before:bg-white before:bottom-0 font-disket-mono
                        "
                    >{email}</a>
                
                    <ContactForm/>
                </div>
            </div>
        </section>
    )
}

export default Contact