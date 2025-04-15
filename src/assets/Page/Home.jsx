import React from 'react';
import Navbar from "./Navbar";
import Footer from './Footer';
const Home = () => {
  return (
    <>
    <Navbar/>
    <main>
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-3xl font-bold mb-4">Platform Penyedia Jasa Buzzer, KOL, dan Influencer Aktif Indonesia</h1>
                <p className="text-lg mb-8">Kami membantu brand Anda untuk mencapai target pasar yang lebih luas dengan bantuan influencer terbaik.</p>
                
                <img src="https://placehold.co/600x400" alt="Main Banner" className="mt-8 mx-auto" />
            </div>
        </section>

        <section className="py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl font-bold mb-4">Kami Selalu Memberikan Yang Terbaik</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white shadow p-6 rounded">
                        <h3 className="text-xl font-bold mb-2">Cepat</h3>
                        <p className="text-gray-600">Follower mulai masuk dalam hitungan menit setelah proses dimulai.

</p>
                    </div>
                    <div className="bg-white shadow p-6 rounded">
                        <h3 className="text-xl font-bold mb-2">Aman</h3>
                        <p className="text-gray-600">Semua proses dilakukan secara manual dan terjamin keamanannya.

</p>
                    </div>
                    <div className="bg-white shadow p-6 rounded">
                        <h3 className="text-xl font-bold mb-2">Berkualitas</h3>
                        <p className="text-gray-600">Follower yang digunakan menggunakan akun yang fresh / organik</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4 text-center">
                <img src="https://placehold.co/800x400" alt="Marketing Banner" className="mx-auto" />
            </div>
        </section>

        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex items-center">
                        <img src="https://placehold.co/200x200" alt="Person 1" className="rounded-full w-32 h-32 mr-4" />
                        <div>
                            <h3 className="text-xl font-bold mb-2">Apa yang dimaksud dengan Buzzer?</h3>
                            <p className="text-gray-600">Buzzer adalah seseorang yang memiliki pengaruh di media sosial dan dapat membantu menyebarkan informasi dengan cepat.</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <img src="https://placehold.co/200x200" alt="Person 2" className="rounded-full w-32 h-32 mr-4" />
                        <div>
                            <h3 className="text-xl font-bold mb-2">Apa itu KOL (Key Opinion Leader)?</h3>
                            <p className="text-gray-600">KOL adalah individu yang memiliki pengaruh besar di komunitas tertentu dan dapat mempengaruhi opini publik.</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <img src="https://placehold.co/200x200" alt="Person 3" className="rounded-full w-32 h-32 mr-4" />
                        <div>
                            <h3 className="text-xl font-bold mb-2">Apa itu Influencer dan jenis-jenisnya?</h3>
                            <p className="text-gray-600">Influencer adalah seseorang yang memiliki pengaruh di media sosial dan dapat mempengaruhi keputusan pembelian orang lain.</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <img src="https://placehold.co/200x200" alt="Person 4" className="rounded-full w-32 h-32 mr-4" />
                        <div>
                            <h3 className="text-xl font-bold mb-2">Cara Populerkan di Social Media Berantas Korupsi</h3>
                            <p className="text-gray-600">Menggunakan media sosial untuk menyebarkan informasi dan meningkatkan kesadaran tentang pentingnya memberantas korupsi.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4 text-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white shadow p-6 rounded">
                        <h3 className="text-xl font-bold mb-2">Afiliasi</h3>
                        <p className="text-gray-600">Bergabunglah dengan program afiliasi kami dan dapatkan komisi dari setiap penjualan yang Anda referensikan.</p>
                    </div>
                    <div className="bg-white shadow p-6 rounded">
                        <h3 className="text-xl font-bold mb-2">Kontributor</h3>
                        <p className="text-gray-600">Menjadi kontributor dan berbagi pengetahuan serta pengalaman Anda dengan komunitas kami.</p>
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
