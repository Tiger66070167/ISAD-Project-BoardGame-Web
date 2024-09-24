"use client"

import { Button } from "@/components/ui/button";
import React from "react";

export default class foodCard extends React.Component {
  render() {
    return (
      <div className="max-w-full min-w-[1000] shadow-2xl mt-2">
        <Button className="grid grid-col-2 bg-[#292929] hover:border-[--primary-color] border-transparent border-2 h-[400px] w-full rounded-2xl">
          {/* inbox picture Set */}
          <div className=" w-64 mx-auto top-0 mb-3">
            <div className="bg-[url('../assets/boardgame.jpeg')] object-scale-down h-48 w-79 rounded-2xl overflow-hidden shadow-md"></div>
          </div>
          {/* set name and descrip of Menu */}
          <div className="grid grid-rows-3 text-justify">
            {/* <div className=""> */}
            <div className="text-xl font-bold text-white ">Name</div>
            {/* Add button
              <button className="flex bg-[--primary-color] w-10 ml-20 rounded-xl hover:scale-105">
                <div className="ml-3 text-[#FFFFFF] text-2xl font-bold">+</div></button> */}
            {/* </div> */}
            <div className="text-xm text-white leading-10">Price</div>
            <div className="text-xm text-white">Description</div>
          </div>
        </Button>
      </div>
    );
  }
}
