import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function ProductDetails({detailItem}) {
  const { id } = useParams();
  
  return (
    <div className="flex">
      <div className=" grid grid-cols-2 gap-[20px] w-[65%] ml-[70px] pr-[50px]">
        {detailItem.colors.map((item, idx) => {
          return <img key={idx} src={item} alt=""/>
        })}
      </div>
      <div className='w-[35%] pr-[100px] pl-[20px]'>
        <h1 className='text-[30px] font-medium'>{detailItem.name}</h1>
        <p>{detailItem.gender}'s Shoes</p>
        <h2 className='mt-[20px] text-[30px] font-medium'>{detailItem.price}</h2>
        <div className='flex'>
          {detailItem.colors.map((item, idx) => {
            return (
              <div key={idx}>
                <input id={idx} type='checkbox' className='hidden'
                />
                <label for={idx} >
                  <img className='w-[70px] h-[70px] mr-[10px] mt-[10px] rounded-[5px] border hover:border-black ' 
                  src={item} alt=""/>
                </label>
              </div>
            )
          })}
        </div>
        <h1>Select Size</h1>
        <div className="grid grid-cols-3">
          {detailItem.size.map((item, idx) => {
            return (
              <div key={idx}>
                <input id={idx} type='checkbox' />
                <label htmlFor={idx} >{item}</label>
              </div>
            )
          })}
        </div>
        <button type='submit' className='rounded-[50px] bg-black text-white w-full pt-[18px] pb-[18px]'>Add to Bag</button>
      </div>
        
    </div>
  )
};

export default ProductDetails;
