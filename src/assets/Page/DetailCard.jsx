import React from "react";
import Gambar from '../Gambar/download.jpg'
const DetailCard = ({id}) => {


        return (
  

<div className="overflow-hidden flex flex-col w-[50%] h-auto
      bg-gray-400 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      
      {/* Bagian Gambar */}
      <div className=" w-full h-2/3">
        <img
          className=" w-full "
          src={Gambar}
          alt="Card Image"
        />
      </div>

      {/* Bagian Konten Scrollable */}
      <div className="px-2 ">
          <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021sadddddddddddd
          </h5>
          <p>sadsds</p>
          <p>sadsds</p>
          <p>sadsds</p>
          <p>sadsds</p>
          <p>sadsds</p>
          <p>sadsds</p>
        

         

      </div>
      <div className="flex justify-end mb-0 h-[10vh]">
        
  <button
   
    className="flex w-full text-sm font-medium text-white bg-blue-700  hover:bg-blue-800  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-center items-center text-[100%]" 
  >
    <a href="http://whatsapweb">
   25rb/1000 Like </a>
  </button>
</div>
    </div>


  );
};

export default  DetailCard;
