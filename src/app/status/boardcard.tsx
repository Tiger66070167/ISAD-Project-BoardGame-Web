"use client";

import React from "react";

export default class boardcard extends React.Component {
  render() {
    return (
      <div className="flex w-full shadow-2xl ml-20 mt-2">
        <div className=" bg-[#292929] hover:border-[--primary-color] border-transparent border-2 h-[400px] w-[300px] rounded-2xl">
          {/* inbox picture Set */}
          <div className=" flex-none w-64 mx-auto mt-4 mb-3">
            <div className="bg-[url('../assets/boardgame.jpeg')] object-scale-down h-48 w-79 rounded-2xl overflow-hidden shadow-md"></div>
          </div>
          {/* set name and descrip of Menu */}
          <div className="flex flex-col items-center">
            <div className="text-2xl font-bold text-white">Name</div>
          </div>
          <div className="flex flex-col items-center py-12">
            <div className="text-2xl font-bold text-white">
              Status boardgame
            </div>
          </div>
        </div>
      </div>
    );
  }
}
