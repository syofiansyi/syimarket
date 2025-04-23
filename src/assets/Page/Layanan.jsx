import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import Filter from "./Filter";
import Footer from "./Footer";
import Header from "./Header";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Layanan = () => {
    const [data, setData] = useState([]); // Untuk menyimpan data dari API
    const [loading, setLoading] = useState(true); // Untuk status loading
    const navigate = useNavigate();
    const Spinner = () => {
        return (
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
        );
      };
    // Fungsi untuk mengambil data dari API
    const fetchData = async () => {
        const token = localStorage.getItem('token'); // Ambil token dari localStorage
        console.log("Token yang digunakan:", token);
    
        if (!token) {
            console.warn("Token tidak ditemukan. User belum login?");
            setLoading(false);
            navigate('/login');
            return;
        }
    
        try {
            const response = await axios.get('http://localhost:5600', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
    
            setData(response.data); // Set data yang diterima dari API
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false); // Apapun hasilnya, set loading false
        }
    };
    

    useEffect(() => {
        fetchData(); // Panggil fetchData hanya sekali ketika komponen dimount
    }, []); // [] kosong berarti useEffect hanya dijalankan sekali setelah mount

    return (
        <>
            <Header />
            {/* Pastikan data sudah ada sebelum dioper ke Filter */}
            {loading ? (
                <Spinner/>
            ) : (
                <Filter data={data} />
            )}
            <Footer />
        </>
    );
};

export default Layanan;
