"use client";

import React from "react";
import Descriptgame from "../../status/[descriptionGame]/page";
import Link from "next/link";

export default class boardcard extends React.Component {

  render() {

    return (
      <div className="ml-20">
        <Link href={`/status`}>
        <div
          className=" bg-[#292929] hover:border-[--primary-color] border-transparent border-2 h-[400px] w-[300px] rounded-2xl"
        >
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
        <div id="overlay" className=" bg-[--neutrals-color] hidden">
          <div className="flex justify-center items-center">
            <div className="shadow-md rounded-lg bg-[#303030] flex flex-col pt-6 w-96 desktop:w-[500px] h-auto pb-20">
              <div className="grid grid-cols-2">
                <div></div>
                <div className="flex flex-col items-end">
                  <div className="flex flex-col items-end mr-8">
                    <button type="button">
                      <span className="close"></span>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="laptop:text-3xl desktop:text-4xl font-black text-white mt-2 ml-12">
                  Name
                </h1>
              </div>
              <div className="grid grid-cols-2 mt-8">
                <div className=" flex-none w-48 ml-12">
                  <div className="bg-[url('../assets/boardgame.jpeg')] object-scale-down h-48 w-79 rounded-2xl overflow-hidden shadow-md"></div>
                </div>
                <div>
                  <div className="flex flex-col items-center pt-8">
                    <div className="text-3xl font-bold text-white">
                      สถานะการใช้งาน
                    </div>
                  </div>
                  <div className="flex flex-col items-center py-12">
                    <div className="text-2xl font-bold text-white">
                      Status boardgame
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-rows-4 ml-12 pt-8">
                <div className="text-2xl text-white font-bold">ประเภท</div>
                <div className="text-xl text-white font-bold ml-8">
                  คำอธิบายประเภท
                </div>
                <div className="text-2xl text-white mt-4">วิธีเล่น</div>
                <div className="text-xl text-white font-bold ml-8 mt-4">
                  คำอธิบายวิธีเล่น
                </div>
              </div>
            </div>
          </div>
        </div>
        </Link>
      </div>
    );
  }
}
