"use client";

import React from "react";
import Descriptgame from "../status/descriptgame";
import {Popover,PopoverContent,PopoverTrigger} from "../status/popover"

export default class boardcard extends React.Component {
  render() {
    function clickMenu() {
      let event = document.getElementById("menu");
      event?.className === "hidden absolute px-20 pb-5 menu-acti"
        ? (event.className = "hidden absolute px-20 pb-5")
        : 0;
    }
    return (
      <div className="ml-20">
        <Popover>
          <PopoverTrigger>
          <div className=" bg-[#292929] hover:border-[--primary-color] border-transparent border-2 h-[400px] w-[300px] rounded-2xl">
            {/* inbox picture Set */}
            <div className=" flex-none w-64 mx-auto mt-4 mb-3">
              <div className="bg-[url('../assets/boardgame.jpeg')] object-scale-down h-48 rounded-2xl overflow-hidden shadow-md"></div>
            </div>
            {/* set name and descrip of game */}
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-white">Name</div>
            </div>
            <div className="flex flex-col items-center py-12">
              <div className="text-2xl font-bold text-white">
                Status boardgame
              </div>
            </div>
          </div>
            <PopoverContent>
              <div className="object-center">
                <Descriptgame></Descriptgame>
              </div>
            </PopoverContent>
          </PopoverTrigger>
        </Popover>
      </div>
    );
  }
}
