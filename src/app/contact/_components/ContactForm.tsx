"use client"

import { useToast } from "@/hooks/use-toast"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"



function ContactForm() {
    
    const [email,setEmail] = useState<string>('')
    const [msg,setMsg] = useState<string>('')

    const { toast }= useToast()

    const handleSendEmail = () => {
        if (!email || !msg) {
            return toast({
                title: "Error",
                description: "Please fill all fields",
                variant:"destructive",
            })
        }else {
            setEmail("")
            setMsg("")
            return toast({
                title: "Success",
                description: "Email Sent successfully",
                variant:"default",
                className:"bg-green-400 border-green-400"
            })
        }

    }

    return (
        <div className='w-full flex h-full'>
            <div className="flex flex-col h-full gap-10 w-full">
                <input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text" 
                    placeholder="Enter Your Email" 
                    className='w-full p-4 placeholder:text-white/70 font-vcr-osd-mono text-xl h-[60px] border-b-2 border-b-white' 
                />
                <textarea 
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    placeholder="Enter Your Message" 
                    className='w-full p-4 placeholder:text-white/70 h-[300px] font-vcr-osd-mono text-xl border-b-2 border-white' 
                />

                <button onClick={handleSendEmail} className="w-fit py-3 px-12 uppercase bg-white text-black text-xl font-vcr-osd-mono">
                    Send
                </button>
            </div>
        </div>
    )
}

export default ContactForm