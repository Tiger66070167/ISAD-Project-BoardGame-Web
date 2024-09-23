import React from "react";
function foodCardOri() {
  return (
    <div className="flex w-full shadow-2xl mt-2">
      <div className=" bg-[#292929] hover:border-[--primary-color] border-transparent border-2 h-[400px] w-full rounded-2xl">
        {/* inbox picture Set */}
        <div className=" flex-none w-64 mx-auto mt-4 mb-3">
          <div className="bg-[url('../assets/boardgame.jpeg')] object-scale-down h-48 w-79 rounded-2xl overflow-hidden shadow-md"></div>
        </div>
        {/* set name and descrip of Menu */}
        <div className="ml-9">
          <div className="grid grid-cols-2">
            <div className="text-xl font-bold text-white">Name</div>
            {/*  Add button */}
              <button className="flex bg-[--primary-color] w-10 ml-20 rounded-xl hover:scale-105">
                <div className="ml-3 text-[#FFFFFF] text-2xl font-bold">+</div></button>
          </div>
          <div className="text-xm text-white leading-10">Price</div>
          <div className="text-xm text-white">Description</div>
        </div>
      </div>
     </div>
  );
}
export default foodCardOri
