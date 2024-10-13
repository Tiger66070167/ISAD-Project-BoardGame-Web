import React from "react";

export default function Table(){
    return (
        <>
        <div className="flex items-center justify-center border-1 p-2">
            <div className="flex flex-wrap justify-center max-h-96 w-[90vw] overflow-y-scroll">
            <TableCard/><TableCard/><TableCard/><TableCard/>
            </div>
        </div>
        </>
    );
}

function TableCard(){
    return (
        <>
        <div className=" m-2 w-11/12 h-24 rounded-lg shadow-lg text-center flex flex-col justify-center items-center 
              bg-[#303030] text-white">
        </div>
        </>
    );
}