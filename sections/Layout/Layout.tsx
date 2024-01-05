import React, { ReactNode } from "react";
import NavBar from "../NavAndFooter/Navbar";
import Footer from "../NavAndFooter/Footer";

interface LayoutInterface{
    children: ReactNode;
}

export default function Layout({children}:LayoutInterface){
    return(
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    )
}