"use client"

import { Children } from "@/types"
import { ReactLenis } from "@studio-freight/react-lenis"

function LenisProvider({children}:Children) {
    return (
        <ReactLenis root>
            { children }
        </ReactLenis>
    )
}

export default LenisProvider