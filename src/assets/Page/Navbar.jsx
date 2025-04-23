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
            <Link className="hover:underline" to="/">Home</Link>
            <Link className="hover:underline" to="/Layanan">Layanan</Link>
            <Link className="hover:underline" to="/FAQ">FAQ</Link>
            
        </nav>
        {/* <Link className="hover:underline" to="/MyAcount">MyAccount</Link> */}

    </header>
    );
};

export default Navbar;