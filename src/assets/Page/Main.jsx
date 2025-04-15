import React, { useEffect, useState } from "react";
import car1 from '../Gambar/sosmedhook1.jpg'
import car2 from '../Gambar/sosmedhook2.jpg'
import car3 from '../Gambar/sosmedhook4.jpg'
import car4 from '../Gambar/sosmedhook5.jpg'
import car5 from '../Gambar/solusi.png'
import car6 from '../Gambar/syisolution.png'
import car7 from '../Gambar/sosmed1.jpg'
import car8 from '../Gambar/sosmed2.jpg'
import car9 from '../Gambar/sosmed3.jpg'




const images = [
 car1,car2,car3,car4,car5,car6,car7,car8,car9
];

const Main = () => {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000); // 5 detik

    return () => clearInterval(interval); // Cleanup kalau komponen unmount
  }, [current]); // Bisa juga kosong [] jika tidak mau reset interval tiap slide berubah


  return (
    <div>
  <div className="relative w-full h-[300px] max-w-xl mx-auto overflow-hidden object-cover ">
      <div
        className="flex transition-transform duration-500 w-full max-h-3/4"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Slide ${idx}`}
            className="w-full flex-shrink-0"
          />
        ))}
      </div>

      {/* Navigation Buttons */}
   
    </div>
    <div className="flex justify-between  items-start">
    <button
        onClick={prevSlide}
        className=" p-4 bg-opacity-50 text-black font-bold"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className=" p-4  bg-opacity-50 text-black font-bold"
      >
        Next
      </button>
    </div>
    </div>
  
  );
};

export default Main;
