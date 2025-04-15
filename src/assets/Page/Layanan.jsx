import React from "react";
import { Routes, Route } from 'react-router-dom';
import Filter from "./Filter";
import Detail from "./Detail";
import Main from "./Main";
import Footer from "./Footer";
import Header from "./Header";




// Sample data
const data = [
    { id: 1, nama: 'Youtube', harga: 12000 },
    { id: 2, nama: 'Netflix', harga: 50000 },
    { id: 3, nama: 'Youtube', harga: 12000 },
    { id: 4, nama: 'Youtube', harga: 12000 },
    { id: 5, nama: 'Youtube', harga: 12000 },
    { id: 6, nama: 'Youtube', harga: 12000 },
    { id: 7, nama: 'Youtube', harga: 12000 },
    { id: 8, nama: 'Youtube', harga: 12000 },
    { id: 9, nama: 'Youtube', harga: 12000 },
];

const Layanan = () => {
    return (
        <>
      <Header/>
      <Filter data={data}/>
      <Footer />
       </>
            );
};

export default Layanan;
