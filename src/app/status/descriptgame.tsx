"use client";
import React from "react";

export default class descriptgame extends React.Component {
    render() {
        return (
            <div className="laptop:aspect-[16/8.4] bg-[--neutrals-color]">
                <div className="flex justify-center items-center tablet:pt-16 laptop:pt-20 desktop:pt-28 laptop:pb-12 desktop:pb-22">
                    <div className="shadow-md rounded-lg bg-[#303030] flex flex-col pt-6 w-96 desktop:w-[500px] h-auto pb-20">
                        <div className="grid grid-cols-2">
                            <div></div>
                            <div className="flex flex-col items-end">
                                <div className="flex flex-col items-end mr-8">
                                    <button type="button"><span className="close"></span></button>
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
                            <div className="text-xl text-white font-bold ml-8">คำอธิบายประเภท</div>
                            <div className="text-2xl text-white mt-4">วิธีเล่น</div>
                            <div className="text-xl text-white font-bold ml-8 mt-4">คำอธิบายวิธีเล่น</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}