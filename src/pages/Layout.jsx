import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar/Navbar"
import { Footer } from "../components/Footer/Footer"
import { Sidebar } from "../components/Sidebar/Sidebar"

export const Layout = () => {
    return (
        <>
        <div style={{maxWidth: "100dvw"}}>
            <Navbar />
                <div className="d-flex flex-row">
                    <Outlet />
                    {/* <Sidebar /> */}
                </div>
            <Footer />
        </div>
        </>
    )
}