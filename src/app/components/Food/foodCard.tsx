"use client";
import { button } from "@nextui-org/theme";
import Link from "next/link";
import React from "react";

export default class foodCard extends React.Component {
  render() {
    return (
      <button>
        <Link href="../food/foodChatGPT4O">
        <div className="w-[300px] shadow-2xl mt-2">
          <div
            className="flex flex-col justify-center items-center bg-[#292929] hover:bg-[--neutral-color] hover:border-[--primary-color] border-transparent border-2 h-[400px] w-full rounded-2xl"
            // onClick={() => {
            // }}
          >
            {/* inbox picture Set */}
            <div className="w-64 mx-auto top-0  mb-3">
              <div className="bg-[url('../assets/boardgame.jpeg')] bg-center object-scale-down h-48 w-full rounded-2xl overflow-hidden shadow-md"></div>
            </div>
            {/* set name and descrip of Menu */}
            <div className="grid grid-rows-3 text-justify">
              {/* <div className=""> */}
              <div className="text-xl  font-bold text-white ">Name</div>
              {/* Add button*/}

              <div className="text-xm text-white leading-10">Price</div>
              <div className="text-xm text-white">Description</div>
            </div>
          </div>
        </div>
        </Link>
      </button>
    );
  }
}
