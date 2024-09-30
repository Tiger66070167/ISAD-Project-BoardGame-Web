"use client";
import React from "react";

export default class orderCard extends React.Component {
  render() {
    return (
      <div className="w-full shadow-2xl mt-2">
        <div
          className="flex flex-rows left-11 bg-[#292929] hover:bg-[--neutral-color] hover:border-[--primary-color] border-transparent border-2 h-[200px] w-full rounded-2xl"
          onClick={() => {
            //alert("ฮั่นแน่ https://www.instagram.com/p/C_mNEalSbfS/");
          }}
        >
          {/* inbox picture Set */}
          <div className="w-[400px] mx-0 top-0  mb-3">
            <div className="bg-[url('../assets/boardgame.jpeg')] bg-center object-scale-down h-48 w-full rounded-2xl overflow-hidden shadow-md"></div>
          </div>
          {/* set name and descrip of Menu */}
          <div className="grid grid-cols-2  w-full">
            <div className="grid grid-rows-3 text-justify mx-6 mt-5">
              {/* <div className=""> */}
              <div className="text-3xl  font-bold text-white ">Name</div>
              {/* Add button*/}

              <div className="text-lg text-white">Description</div>
            </div>
            <div className="grid grid-cols-3">
                <div className="grid justify-center items-center mt-4 text-3xl ">
                    Quatity
                    <div className="text-center leading-3 w-[100px] h-[80px] text-3xl mt-5">20</div>
                </div>
                <div className="grid justify-center items-center mt-4 text-3xl ">
                    Price
                    <div className="flex leading-3 w-[100px] h-[80px] text-3xl mt-5">20</div>
                </div>
              <button className="flex w-full rounded-2xl  justify-center items-center text-3xl hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
                <div className="flex justify-center w-full h-full bg-[#191919] rounded-2xl items-center">
                แก้ไข
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
