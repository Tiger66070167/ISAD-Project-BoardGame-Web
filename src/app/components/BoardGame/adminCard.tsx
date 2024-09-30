"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default class boardcard extends React.Component {
  render() {
    return (
      <div className="w-[300px] shadow-2xl mt-2">
        <div className="grid grid-col-2 bg-[#292929] hover:bg-[--neutral-color] hover:border-[--primary-color] border-transparent border-2 h-[400px] w-full rounded-2xl">
          {/* inbox picture Set */}
          <div className=" w-64 mx-auto top-0 pt-5">
            <Image
              className="object-scale-down h-48 w-80 rounded-2xl overflow-hidden shadow-md"
              src=""
              alt=""
            />
            <div className="text-xl font-bold text-white flex items-center justify-center pt-4">
              Board game name
            </div>
          </div>

          {/* set name and descrip of Menu */}
          <div className="flex flex-col justify-start items-center gap-y-3">
            <div className="text-2xl text-white ">Status</div>
            <button
              className="bg-[--primary-color]
              px-5 py-1
              rounded
              hover:bg-[--hover-primary-color] duration-300"
            >
              Chage Status
            </button>
            <div className="flex gap-x-5">
              <Link href="/admin/BoardGameAdmin/ModifyBoardGame">
              <button
                className="px-5 py-1
              bg-[--secondary-color] rounded
              hover:bg-[--passed-color] duration-300"
              >
                Modify
              </button>
              </Link>
              <button className="px-5 py-1
              bg-[--incorrect-color] rounded
              hover:bg-[--hover-incorrect-color] duration-300">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
