"use client";

import React from "react";
import Descriptgame from "../status/descriptgame";
import Boardcard from "../status/boardcard";
import {Popover,PopoverContent,PopoverTrigger} from "../status/popover"

export default class statusPage extends React.Component {
  render() {
    return (
      <div className="laptop:aspect-[16/8.4] bg-[--neutrals-color]">
        <div className="grid grid-cols-2 pt-32">
          <div className="pl-48 flex">
            <h1 className="text-4xl text-[#5865F2] font-bold ">
              รายการบอร์ดเกม
            </h1>
          </div>
          <div className="pl-36 flex">
            <input
              type="text"
              placeholder="searh boardgame"
              className="text-[#000000] mt-1 px-3 py-2 border-b shadow-sm border-slate-300 w-96 rounded-lg sm:text-sm focus:outline-none focus:border-[--primary-color] transition focus:duration-200"
            />
            <button
              className="rounded-lg text-xl bg-[--primary-color] ml-8 w-24 hover:scale-105 bg-gradient-to-r hover:from-[--primary-color] hover:to-[--accent-color]"
              type="button"
            >
              ค้นหา
            </button>
          </div>
        </div>
        <div className="min-h-screen min-w-screen bg-[--neutrals-color] px-16 py-16">
          <div className="grid grid-cols-3 gap-6 bg-[#171717]">
            {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(() => (
              <Boardcard></Boardcard>
            ))}
          </div>
        </div>

      </div>
    );
  }
}
