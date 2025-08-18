import { Outlet } from "react-router-dom/dist"
import { Navbar } from "../components/Navbar/Navbar"
import { Footer } from "../components/Footer/Footer"

export const Layout = () => {
    return (
        <>
            <Navbar />
                <Outlet />
            <Footer />
        </>
    )
}