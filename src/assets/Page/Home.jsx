import React from 'react';
import Navbar from "./Navbar";
import Footer from './Footer';
import Gambar from '../Gambar/sosmed.jpeg'
import Gambar2 from '../Gambar/medsos2.png'
import { Link } from "react-router-dom";

const Home = () => {
    function scrollToSection(id) {
        
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }

      const features = [
        {
          title: 'Kecepatan Tinggi',
          description: 'Aplikasi ini dibangun dengan Vite, yang menawarkan kecepatan pengembangan dan waktu muat yang cepat.',
        },
        {
          title: 'Hot Module Replacement',
          description: 'Perubahan yang Anda buat akan langsung terlihat tanpa perlu memuat ulang halaman.',
        },
        {
          title: 'Dukungan TypeScript',
          description: 'Mendukung TypeScript secara langsung, sehingga Anda bisa menulis kode yang lebih aman dan terstruktur.',
        },
        {
          title: 'Optimasi Produksi',
          description: 'Vite secara otomatis mengoptimalkan aplikasi Anda untuk produksi, termasuk pengurangan ukuran bundle.',
        },
      ];


  return (
    <>
    <Navbar scrollToSection={scrollToSection}/>
    <main>
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-3xl font-bold mb-4">Solusi Terpercaya untuk Promosi Lewat Buzzer, KOL, dan Influencer Indonesia
               </h1>
                <p className="text-lg mb-8"> Bersama para influencer terbaik, kami bantu brand Anda tumbuh dan dikenal lebih luas.</p>

                <img src={Gambar} alt="Main Banner" className=" h-[300px] w-[50%] mx-auto rounded-2xl" />
            </div>
        </section>

        <section className="py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl font-bold mb-4">Kami Selalu Memberikan Yang Terbaik</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white shadow p-6 rounded">
                        <h3 className="text-xl font-bold mb-2">Cepat</h3>
                        <p className="text-gray-600">Transaksi dilakukan mulai masuk dalam hitungan menit setelah pembayaran dilakukan.

</p>
                    </div>
                    <div className="bg-white shadow p-6 rounded">
                        <h3 className="text-xl font-bold mb-2">Aman</h3>
                        <p className="text-gray-600">Semua proses dilakukan secara manual dan terjamin keamanannya.

</p>
                    </div>
                    <div className="bg-white shadow p-6 rounded">
                        <h3 className="text-xl font-bold mb-2">Berkualitas</h3>
                        <p className="text-gray-600">Akun yang digunakan menggunakan akun yang fresh / organik</p>
                    </div>
                </div>
            </div>
        </section>

        <section id='tesy' className="bg-gray-100 py-16">
            <div className="container mx-auto">
                <img src={Gambar2} alt="Marketing Banner" className="h-[300px] w-[50%] mx-auto rounded-3xl" />
            </div>
        </section>

        {/* <section className="">
            <div className="container mx-auto px-4">
                <div className='py-8'>
                <h1 className="text-center text-2xl font-bold">
  Layanan Yang Kami Sediakan
</h1>
                </div>
               
     
                <div className="flex flex-wrap gap-4 p-2">
  {features.map((feature, index) => (
    <div className="feature-card w-full md:w-[calc(50%-1rem)]" key={index}>
      <div className="flex items-center space-x-4">
        <img 
          src="https://placehold.co/200x200" 
          alt="Person 3" 
          className="rounded-full w-32 h-32" 
        />
        <div>
          <h3 className="text-xl font-bold mb-2">Apa itu Influencer dan jenis-jenisnya?</h3>
          <p className="text-gray-600">
            Influencer adalah seseorang yang memiliki pengaruh di media sosial dan dapat mempengaruhi keputusan pembelian orang lain.
          </p>
        </div>
      </div>
    </div>
  ))}
</div>

   

<div className="flex items-center w-1/2">
                        <img src="https://placehold.co/200x200" alt="Person 3" className="rounded-full w-32 h-32 mr-4" />
                        <div>
                            <h3 className="text-xl font-bold mb-2">Apa itu Influencer dan jenis-jenisnya?</h3>
                            <p className="text-gray-600">Influencer adalah seseorang yang memiliki pengaruh di media sosial dan dapat mempengaruhi keputusan pembelian orang lain.</p>
                        </div>
                    </div>
            </div>
        </section> */}

        <section id="testim" className="py-10 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-2xl font-semibold mb-6 text-center">Testimoni</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Testimonial Card 1 */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <img src="https://via.placeholder.com/100" alt="John Doe" className="w-24 h-24 rounded-full mx-auto mb-4" />
        <p className="text-gray-600 italic">"Great products! Fast shipping and excellent customer service. I was pleasantly surprised by the quality of the items I received."</p>
        <h3 className="text-lg font-semibold mt-4">- John Doe</h3>
        <p className="text-gray-500">Verified Buyer</p>
      </div>
      {/* Testimonial Card 2 */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <img src="https://via.placeholder.com/100" alt="Jane Smith" className="w-24 h-24 rounded-full mx-auto mb-4" />
        <p className="text-gray-600 italic">"I love the quality of the items. The colors are vibrant and the fit is perfect. Will definitely buy again!"</p>
        <h3 className="text-lg font-semibold mt-4">- Jane Smith</h3>
        <p className="text-gray-500">Fashion Enthusiast</p>
      </div>
      {/* Testimonial Card 3 */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <img src="https://via.placeholder.com/100" alt="Alice Johnson" className="w-24 h-24 rounded-full mx-auto mb-4" />
        <p className="text-gray-600 italic">"Amazing experience! The customer support was very helpful when I had questions about my order. Highly recommend this store."</p>
        <h3 className="text-lg font-semibold mt-4">- Alice Johnson</h3>
        <p className="text-gray-500">Frequent Shopper</p>
      </div>
      {/* Testimonial Card 4 */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <img src="https://via.placeholder.com/100" alt="Michael Brown" className="w-24 h-24 rounded-full mx-auto mb-4" />
        <p className="text-gray-600 italic">"I was impressed with the variety of products available. Everything I ordered arrived on time and in perfect condition!"</p>
        <h3 className="text-lg font-semibold mt-4">- Michael Brown</h3>
        <p className="text-gray-500">Tech Lover</p>
      </div>
      {/* Testimonial Card 5 */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <img src="https://via.placeholder.com/100" alt="Sarah Wilson" className="w-24 h-24 rounded-full mx-auto mb-4" />
        <p className="text-gray-600 italic">"The best online shopping experience I've had! The website is easy to navigate and the checkout process was seamless."</p>
        <h3 className="text-lg font-semibold mt-4">- Sarah Wilson</h3>
        <p className="text-gray-500">Home Decor Aficionado</p>
      </div>
      {/* Testimonial Card 6 */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <img src="https://via.placeholder.com/100" alt="David Lee" className="w-24 h-24 rounded-full mx-auto mb-4" />
        <p className="text-gray-600 italic">"I bought a gift for my friend, and she loved it! Thank you for making my shopping experience so enjoyable."</p>
        <h3 className="text-lg font-semibold mt-4">- David Lee</h3>
        <p className="text-gray-500">Gift Giver</p>
      </div>
    </div>
  </div>
</section>

    </main>

   <Footer/>
</>
   
  );
};

export default Home;
