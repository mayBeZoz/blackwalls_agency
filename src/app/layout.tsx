import type { Metadata } from "next";
import "../globals.css";
import { ReactNode } from "react";
import Header from "./_layout/Header";
import LenisProvider from "./_providers/LenisProvider";

export const metadata: Metadata = {
    title: "Construction Agency",
    description: "",
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
                </LenisProvider>
            </body>
        </html>
    );
}
