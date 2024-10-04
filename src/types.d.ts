import { ReactNode } from "react"

declare type Children = {
    readonly children: ReactNode
}

declare type TProject = {
    name:string,
    imageURL:string,
    description:string,
    id:number
}