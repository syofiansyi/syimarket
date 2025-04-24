import React from "react";
import Logo from '../Gambar/logo.png'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Navbar = () =>{
    const navigate = useNavigate();
    const cekin = localStorage.getItem('token');
    const handleLogout = () => {
        // Menghapus token dari localStorage
        localStorage.removeItem('token');
        navigate('/login');
      };

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
            {cekin ? (
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      ) : (
        <Link
          className="text-blue-500 hover:underline"
          to="/login"
        >
          Login
        </Link>
      )}

            
        </nav>
        {/* <Link className="hover:underline" to="/MyAcount">MyAccount</Link> */}

    </header>
    );
};

export default Navbar;