import React from "react";
import Logo from '../Gambar/logo.png'
import { Link } from "react-router-dom";

const Navbar = () =>{
const button = () =>{
window.location.href = "https://www.google.com"
}
    return (
        <header className="bg-blue-900 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
            <img src={Logo} alt="SYI Market Logo" className="mr-2 rounded-md"/>
        </div>
        <nav className="space-x-4">
            <a href="#" className="hover:underline"><Link to="/">Home</Link></a>
            <a href="#" className="hover:underline"><Link to="/Layanan">Layanan</Link></a>
            <a href="#" className="hover:underline"><Link to="/FAQ">FAQ</Link></a>
            <a href="#" className="hover:underline"><Link to="/Contact">Contact</Link></a>
        </nav>
        <a href="#" className="hover:underline"><Link to="/Myaccount"></Link></a>
    </header>
    );
};

export default Navbar;