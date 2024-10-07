// src/app/food/foodChatGPT4O/page.tsx
"use client"; // For Next.js client-side rendering

import { useParams } from 'react-router-dom'; 
import React, { useState, useEffect } from 'react';
export default class addFoodPage extends React.Component{
render(){
  return (

      <div className="text-white flex px-20 min-h-screen min-w-screen justify-center bg-[--neutrals-color] py-20">
        <div className=" bg-[#292929] w-[500px] h-[600px] rounded-2xl text-center">
          <div className="pt-3 text-[20px] text-center">
            sad
          </div>
          <div className=" w-80 h-[200px] mx-auto">
            <div className="bg-[url('../assets/homeSegtion2.png')] w-full h-full bg-center object-scale-down rounded-xl"></div>
          </div>
          <div className=" text-center h-[60px]">Price</div>
          <div className="h-[70px]">Sum Price</div>
          <div className="grid grid-cols-3 h-[120px] ">
            <button className="flex items-center justify-center text-[60px] bg-neutral-900 rounded-xl w-[100px] h-[100px] self-center mx-auto hover:border-[--primary-color] hover:border-2">
              -
            </button>
            <div className="flex items-center justify-center text-[60px] bg-neutral-900 backdrop-blur-xl bg-opacity-50 rounded-t-xl border-gray-400 border-2">
              <div className="flex text-white ">Quatity</div>
            </div>
            <button className="flex items-center justify-center text-[60px] bg-neutral-900 rounded-xl w-[100px] h-[100px] self-center mx-auto hover:border-[--primary-color] hover:border-2">
              +
            </button>
          </div>
          <div className=" bottom-0 left-0 z-30 w-full py-8 px-16 bg-black backdrop-blur-xl bg-opacity-50 rounded-b-2xl">
            <div className="flex bg-[--primary-color] min-w-screen h-[70px] rounded-2xl text-2xl text-black items-center justify-center cursor-pointer hover:scale-105">
              Order
            </div>
          </div>
        </div>
      </div>
    );
  }
}


{
  /* <div className="flex flex-col mx-auto justify-center items-center w-full">

<div className=" w-full bg-[#292929] h-[600px] rounded-2xl">
<div className="flex justify-center items-center w-full mt-2 text-2xl">
ADD MENU
<div className="w-[400px] mx-0 top-0 mb-3 mt-2">
<div className="bg-[url('../assets/boardgame.jpeg')] bg-center object-scale-down h-48 w-full rounded-2xl overflow-hidden shadow-md"></div>
</div>
<div className="grid grid-rows-4 w-full items-center justify-center h-[300px]">
<div className="flex justify-center w-full h-full text-[30px] mt-5">
Name
</div>
<div className="flex justify-center text-center text-3xl">
Price
<br />
30
</div>
<div className="flex justify-center ">Amount</div>
<div className="grid grid-cols-3 text-center rounded-xl justify-center items-center w-full h-full">
<button className="flex ml-5 justify-center items-center text-[30px] w-[120px] h-full bg-black rounded-xl">
Add
</button>
<div className="flex justify-center ml-5 items-center text-[40px] w-[160px] h-full bg-gray-400 rounded-xl">
123
</div>
<button className="flex justify-center items-center text-[30px] w-[140px] mx-10 h-full bg-black rounded-xl">
Remove
</button>
</div>
</div>
</div>
</div>
</div>
</div> */
}
