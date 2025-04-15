import React from "react";
import { useParams } from "react-router-dom";
import DetailCard from "./DetailCard";
import Header from "./Header";
import Footer from "./Footer";




const Detail = () =>{
    const {id} = useParams();
    return (
      <>    
      <Header/>
        <div className="flex justify-center items-center  p-4 ">
        <DetailCard id={id} />
      </div>
      <Footer/>
   </>
    )
}

export default Detail;