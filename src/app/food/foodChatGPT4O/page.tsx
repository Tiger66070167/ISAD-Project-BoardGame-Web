"use client";
import React from "react";
export default class foodAddPage extends React.Component {
  render() {
    return (
      <div className=" px-20 min-h-screen min-w-screen bg-[--neutrals-color] py-20">
        <div className="flex flex-col mx-auto justify-center items-center w-[600px]">
          <div className=" w-full bg-[#292929] h-[600px] rounded-2xl">
            <div className="flex justify-center flex-col items-center w-full mt-2 text-2xl">
              ADD MENU
              <div className="w-[400px] mx-0 top-0  mb-3 mt-2">
                <div className="bg-[url('../assets/boardgame.jpeg')] bg-center object-scale-down h-48 w-full rounded-2xl overflow-hidden shadow-md"></div>
              </div>
              <div className="grid grid-rows-4 w-full items-center justify-center h-[300px]">
                <div className="flex justify-center  w-full h-full text-[30px] mt-5">
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
                  <div className="flex justify-center ml-5 items-center text-[40px] w-[160px]  h-full bg-gray-400 rounded-xl">
                    123
                  </div>
                  <button className="flex justify-center items-center  text-[30px] w-[140px] mx-10 h-full bg-black rounded-xl">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
