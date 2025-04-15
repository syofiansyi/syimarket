import React from 'react';
import Navbar from "./Navbar";
import Footer from './Footer';
const Kontak = () => {
  return (

    <>
    <Navbar/>
     <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-3xl w-full p-6 bg-white rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Kontak Kami</h1>
        <div className="space-y-4 text-lg text-gray-700">
          <div>
            <span className="font-semibold">Email:</span> syofianirwanda21@gmail.com
          </div>
          <div>
            <span className="font-semibold">Telepon:</span> 0985424010064
          </div>
          <div>
            <span className="font-semibold">Alamat:</span> JL Utan Panjang Jakarta Pusat, Kemayoran
          </div>
          <div>
            <span className="font-semibold">Jam Kerja:</span> Senin - Jumat, 09:00 - 17:00 WIB
          </div>
        </div>
      </div>
    </div>
    </>
   
    
  );
};

export default Kontak;
