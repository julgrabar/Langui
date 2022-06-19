import { FC } from "react"
import { Outlet } from "react-router-dom"
import { Global } from "./Global"
import { Header } from "./header/Header"

export const Layout: FC = () => {
    return <>
    <Global/>
    <Header/>
    <main>
    <Outlet/>
    </main>
    
    </>
}