import React from 'react';
import Navbar from "./Navbar";
import Footer from './Footer';

const Faq = () => {
  return (
    <>
    <Navbar/>
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="max-w-3xl w-full bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Pertanyaan Umum (FAQ)</h2>
        
        <div className="space-y-6 text-gray-700 text-lg">
          <div>
            <h3 className="font-semibold text-xl mb-2">Bagaimana cara melakukan up follower?</h3>
            <p>
              Untuk melakukan up follower, Anda perlu menghubungi langsung pemilik layanan melalui nomor kontak yang telah disediakan. 
              Hal ini bertujuan agar proses dapat dikonfirmasi secara manual dan memastikan keamanan transaksi.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">Apakah ada proses otomatis?</h3>
            <p>
              Saat ini, proses pembelian up follower belum otomatis. Anda wajib menghubungi pemilik terlebih dahulu untuk detail paket, harga, dan proses pembayaran.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">Siapa yang harus dihubungi?</h3>
            <p>
              Silakan hubungi <span className="font-semibold">0985424010064</span> (via WhatsApp atau SMS) untuk memproses pembelian dan konsultasi layanan.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">Apakah data saya aman?</h3>
            <p>
              Ya, semua data Anda akan dijaga kerahasiaannya. Kami tidak akan membagikan username, email, atau data pribadi Anda ke pihak lain.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
    
  );
};

export default Faq;
