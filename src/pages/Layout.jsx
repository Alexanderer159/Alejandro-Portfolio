import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar/Navbar"
import { Footer } from "../components/Footer/Footer"

export const Layout = () => {
    return (
        <>
            <Navbar />
            <div className="p-3">
                <Outlet />
            </div>
            {/* <Footer /> */}
        </>
    )
}