import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { Outlet } from "react-router-dom";


export const MainLayout = () => {
    return <div className="main-wrapper">
        <div>
            <Header />
            <Outlet/>
        </div>
        <Footer/>
    </div>;
};