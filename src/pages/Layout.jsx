import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar/Navbar"
import { Footer } from "../components/Footer/Footer"

export const Layout = () => {
    return (
        <>
        <div style={{maxWidth: "100vw"}}>
            <Navbar />
                <Outlet />  
            <Footer />
        </div>
        </>
    )
}