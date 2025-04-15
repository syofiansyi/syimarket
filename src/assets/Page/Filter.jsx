import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Card from "../Component/Card";
import { useEffect } from "react";



const Filter = ({data}) =>{
  const navigate = useNavigate();
  
  const [selectId,setSelectedId] =useState('');
  const [cekId,setCekId] =useState('');

  const dataItem = data.filter((item) => item.id === selectId);


  const handleClick = (e) => {
    navigate(`/Detail/${e}`);
  };
  
  const handleSelect = (e) => {
    setSelectedId(parseInt(e))
    }

    // const sisa = data.length % 4;
    // const tampil = data.slice(0, data.length - sisa);
    const tampil = data.map((item) => item);
  
    return (
<div className="Filter">
<div className="bg-gray-300 flex gap-3 p-4">

  <select className="border-b-amber-800 text-white bg-amber-800 rounded-3xl w-[20rem] h-[3rem] px-4 py-2 appearance-none"
 onChange={(e) => handleSelect(e.target.value)}>
  {data.map((item) => (
    <option key={item.id} value={item.id}>
      {item.nama}
    </option>
    
  ))}
  <option value="null">Semua</option>
  </select>

 
</div>
{selectId
  ? <div className=" flex  flex-wrap gap-2 w-full p-4 justify-center items-center">
    <Card className name={dataItem[0]?.nama} id={dataItem[0]?.id} handleClick={handleClick} />
  </div> 
  :  <div className=" flex  flex-wrap gap-2 w-full p-4 justify-center items-center">
  {tampil.map((item, index) => {
  return (
      <Card key={index} name={item.nama} id={item.id} handleClick={handleClick}  />
  );
})}

  </div>
} 
</div>
    );
};

export default Filter;