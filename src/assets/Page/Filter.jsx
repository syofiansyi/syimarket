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

  const dataItem = data.filter((item) => item.category_id === selectId);
console.log(dataItem)
  
  const handleSelect = (e) => {
    setSelectedId(parseInt(e))
    }


    const tampil = data.map((item) => item);
    const uniqueCategories = Array.from(
      new Map(data.map(item => [item.category_id, item])).values()
    );

    return (
<div className="Filter">
<div className="bg-gray-300 flex gap-3 p-4">

  <select className="border-b-amber-800 text-white bg-amber-800 rounded-3xl w-[20rem] h-[3rem] px-4 py-2 appearance-none"
 onChange={(e) => handleSelect(e.target.value)}>
  {uniqueCategories.map((item) => (
    <option key={item.id} value={item.category_id}>
      {item.name}
    </option>
    
  ))}
  <option value="null">Semua</option>
  </select>

 
</div>
{selectId
  ? <div className=" flex  flex-wrap gap-2 w-full p-4 justify-center items-center">
    {dataItem.map((item, index) => (
    <Card
      key={index}
      name={item.name}
      id={item.category_id}
      deskrip={item.description}
      price={item.price}
      stock={item.stock}
    />
))}

  </div> 
  :  <div className=" flex  flex-wrap gap-2 w-full p-4 justify-center items-center">
  {tampil.map((item, index) => {
  return (
      <Card key={index} name={item.name} id={item.id} deskrip={item.description} price={item.price} stock={item.stock} />
  );
})}

  </div>
} 
</div>
    );
};

export default Filter;