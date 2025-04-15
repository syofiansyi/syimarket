import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Main from "./Main";


const Header = () =>{
    return (
        <>
        <Navbar/>
        <Sidebar/>
        <Main/>
        </>
        
    );
};

export default Header;