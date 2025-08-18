import { createBrowserRouter, createRoutesFromElements, Route, Link } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home/Home";

export const router = createBrowserRouter(

  createRoutesFromElements(

    <Route path="/" element={<Layout />} errorElement={<><div className="d-flex flex-column gap-2 align-items-center"><p className="route-error text-center">These sounds are unknown!</p> <Link to="/" className="text-decoration-none"> <button className="text-white go-back-home" >Lets go back to civilization...</button> </Link> </div></>} >
      <Route index element={<Home />} />
    </Route>
  )
);