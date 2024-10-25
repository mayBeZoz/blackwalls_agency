import { config } from "@/lib/config"
import { div } from "framer-motion/client"

const contacts = [
    {
        title:"facebook",
        href:"/"
    },
    {
        title:"linkedin",
        href:"/"
    },
    {
        title:"instagram",
        href:"/"
    },
    {
        title:"x",
        href:"/"
    },
]

export const Footer = () => {
    const description = "Whether you’re ready to begin your project or just have a question, we're here to help."

    const {email} = config

    return (
        <footer className="my-16">
            <div className="container">
                <div className="flex mb-10 lg:items-center gap-6 justify-between flex-col lg:flex-row">
                    <h1 className="font-vcr-osd-mono uppercase text-5xl">lets talk!</h1>
                    <ul className="flex uppercase font-disket-mono lg:items-center gap-6 flex-col lg:flex-row">
                        {
                            contacts.map((curr,idx)=>(
                                <li key={idx} className="hover:opacity-80 w-fit duration-100 lg:text-lg text-xl">
                                    <a href={curr.href}>{curr.title}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <span className="lg:hidden block w-full h-[1px] bg-white my-6"/>
                <div className="flex lg:flex-row gap-10 flex-col lg:items-end justify-between">
                    <p className="text-2xl font-disket-mono lg:w-1/2">{description}</p>
                    <a href={`mailto:${email}`} className="font-disket-mono hover:opacity-80 underline underline-offset-4 w-fit md:text-right text-left duration-100 text-xl">{email}</a>
                </div>
            </div>
        </footer>
    )
}