import React from "react";
import Download from '../Gambar/download.jpg'; // Pastikan path benar

const Card = ({ id, handleClick }) => {
  return (
    <div className="overflow-hidden flex flex-col w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.5rem)] lg:w-[calc(25%-0.5rem)] h-[50vh] 
      bg-gray-400 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      
      {/* Bagian Gambar */}
     
        <img
          className="rounded-md w-full h-[30vh] "
          src={Download}
          alt="Card Image"
        />
  
      {/* Bagian Konten Scrollable */}
      <div className="px-2 ">
          <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <div className="flex justify-between px-2">
      <button
    
    className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white"
  >
    1000 Like/25000
    
  </button>
  <button
    // onClick={() => handleClick(id)}
    // onClick={() => handleClick(id)}
    className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    <a href="http://wbes">order Sekarang</a>
    
  </button>
</div>

      </div>
    
    </div>
  );
};

export default Card;
