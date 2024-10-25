import type { Metadata } from "next";
import "../globals.css";
import { ReactNode } from "react";
import Header from "./_layout/Header";
import LenisProvider from "./_providers/LenisProvider";
import { Toaster } from "@/components/ui/toaster";
import { Footer } from "./_layout/Footer";

export const metadata: Metadata = {
    title: "Construction Agency",
    description: "a prebuilt web template for digital agencies",
};

type TRootLayoutProps = {
    readonly children: ReactNode
}
export default function RootLayout({children}: TRootLayoutProps) {
    return (
        <html lang="en">
            <body>
                <LenisProvider>
                    <Header/>
                    {children}
                    <Footer/>
                    <Toaster />
                </LenisProvider>
            </body>
        </html>
    );
}
