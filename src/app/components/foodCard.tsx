import React from "react";
function foodCard() {
  return (
    <div className="flex w-full">
      <div className=" bg-green-100 h-[400px] w-full">
        {/* inbox picture Set */}
        <div className=" flex-none w-64 mx-auto mt-3 mb-3">
          <div className="bg-[url('../assets/boardgame.jpeg')] object-scale-down h-48 w-79 rounded-2xl overflow-hidden shadow-md"></div>
        </div>
        {/* set name and descrip of Menu */}
        <div className="mx-a">
          <div className="text-2xl font-bold">Name</div>
          <div className="text-xl">Price</div>
          <div className="text-xl">Description</div>
        </div>
      </div>
     </div>
  );
}
export default foodCard
