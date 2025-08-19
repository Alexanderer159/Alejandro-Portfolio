import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";  
import { router } from "./routes";
import "./index.css";

const Main = () => {

    return (
        <React.StrictMode>
            <RouterProvider router={router}>
            </RouterProvider>
        </React.StrictMode >
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />)