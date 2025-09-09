import { createBrowserRouter, createRoutesFromElements, Route, Link } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home/Home";

export const router = createBrowserRouter(

  createRoutesFromElements(

    <Route path="/" element={<Layout />} >
      <Route index element={<Home />} />
    </Route>
  )
);