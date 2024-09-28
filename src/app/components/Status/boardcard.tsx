"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export default class boardcard extends React.Component {
  render() {
    return (
      <div className="w-[300px] shadow-2xl mt-2">
        <Button className="grid grid-col-2 bg-[#292929] hover:bg-[--neutral-color] hover:border-[--primary-color] border-transparent border-2 h-[400px] w-full rounded-2xl">
          {/* inbox picture Set */}
          <div className=" w-64 mx-auto top-0 mb-3">
            <div className="bg-[url('../assets/boardgame.jpeg')] object-scale-down h-48 w-79 rounded-2xl overflow-hidden shadow-md"></div>
            <div className="text-xl font-bold text-white flex items-center justify-center pt-4">
              Board game name
            </div>
          </div>
          {/* set name and descrip of Menu */}
          <div className="flex flex-col">
            {/* <div className=""> */}
            <div className="text-2xl text-white">Status</div>
          </div>
        </Button>
      </div>
    );
  }
}
