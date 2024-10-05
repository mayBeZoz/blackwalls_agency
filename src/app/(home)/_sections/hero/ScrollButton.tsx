"use client"

import { ContextSafeFunc, useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollToPlugin } from "gsap/all"
import { useRef } from "react"

gsap.registerPlugin(ScrollToPlugin)
function ScrollButton() {
    
    const btn = useRef<HTMLButtonElement>(null)
    
    useGSAP((_,contextSafe)=>{

        const handleClick = (contextSafe as ContextSafeFunc)(() => {
            gsap.to(window, { duration: 1, scrollTo: "#about", ease:"power1.inOut" });
        })

        btn.current?.addEventListener("click", handleClick)
        
        return () => {
            btn.current?.removeEventListener("click", handleClick)
        }
    })

    return (
        <button 
            ref={btn} 
            className="home_hero_scroll_button"
        >
            <img className="mix-blend-difference" src="/svgs/arrow.svg" alt="arrow" />
        </button>
    )
}

export default ScrollButton