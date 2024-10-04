"use client"

import gsap from "gsap"
import { ScrollToPlugin } from "gsap/all"
import { useEffect, useRef } from "react"

gsap.registerPlugin(ScrollToPlugin)
function ScrollButton() {
    
    const btn = useRef<HTMLButtonElement>(null)
    
    useEffect(()=>{
        const button = btn.current
        if (button) {
            button.addEventListener("click", () => {
                gsap.to(window, { duration: 1, scrollTo: "#about", ease:"power1.inOut" });
            })
        }
    },[])

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