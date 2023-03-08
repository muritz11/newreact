// import React, { lazy, Suspense } from 'react'
import {
    createBrowserRouter,
} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import SignIn from "../pages/SignIn";
// import Layout from '../components/dashboard/Layout';


const Routes = () => {
  let router = createBrowserRouter([
    {
        path: "/",
        element: <SignIn />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    }
  ])


  return router
}


export default Routes