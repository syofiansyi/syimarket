import React from "react";

const Footer = () =>{

    return (

<footer id="footer" className="bg-black text-white">
  <div className="max-w-7xl mx-auto px-4 py-6">
    <h2 className="text-2xl font-semibold text-center mb-4">Visit Us</h2>
    <div className="mb-6">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31734.08960852051!2d106.83865929381153!3d-6.162727486711344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5a67f1668f7%3A0xcbffcecd3c26b8d1!2sKec.%20Kemayoran%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1745389196077!5m2!1sid!2sid"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Google Map"
      ></iframe>
    </div>
  
    <div className="text-center mt-6">
    <h1 className=" text-white p-2 flex justify-center items-center h-[100px]">
    © 2025 SYI MARKET REACH BEYOND THE LIMITS </h1>
    </div>
  </div>
</footer>

    );
};

export default Footer;