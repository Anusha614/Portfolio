import React from "react";
import {Home, Footer, Header} from "./Components/Index.jsx"
import { Outlet } from "react-router-dom";

function Route () {
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Route;