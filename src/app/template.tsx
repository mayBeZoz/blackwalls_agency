'use client'

import { Children } from "@/types"
import PageTransition from "@/ui/PageTransition"
import { AnimatePresence } from "framer-motion"

function RootTemplate({ children }:Children) {
    return (
        <AnimatePresence>
            <PageTransition>
                { children }
            </PageTransition>
        </AnimatePresence>
    )
}

export default RootTemplate