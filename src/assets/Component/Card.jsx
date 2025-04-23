import React from "react";
import Download from '../Gambar/download.jpg'; // Pastikan path benar

const Card = ({ name,price,stock }) => {
  return (
    <div className="overflow-hidden flex flex-col w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.5rem)] lg:w-[calc(25%-0.5rem)]
      bg-gray-400 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      
      <div className="bg-white rounded-lg shadow-md p-4">
              <img src={Download} alt="Product" className="w-full h-40 object-fit rounded-md mb-4" />
              <h3 className="text-lg font-semibold">{name}</h3>
              <p className="text-gray-600">{price}/{stock}</p>
              <button
  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-800"
  onClick={() => window.open('http://wbes', '_blank', 'noopener,noreferrer')}
>
  Order Sekarang
</button>

            </div>
      
    </div>
  );
};

export default Card;
