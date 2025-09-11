import { createBrowserRouter, createRoutesFromElements, Route, Link, Navigate } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home/Home";

export const router = createBrowserRouter(

  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} errorElement={<><div className="d-flex flex-column gap-2 align-items-center"><p className="route-error text-center">You shouldn't be here!</p> <Link to="/" className="text-decoration-none"> <button className="go-back-home" >Go Back Home!</button> </Link> </div></>}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </>
  )
);