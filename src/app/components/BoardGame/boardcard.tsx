"use client";

import React from "react";
import { boardGame } from "../../../../utils/typeStorage/boardType";

export default class boardCard extends React.Component<{data: boardGame}> {

  constructor(props: {data: boardGame}) {
    super(props)
  }

  render() {
    return (
      <div className="w-[300px] shadow-2xl mt-2">
        <div className="grid grid-col-2
        bg-[#292929] hover:bg-[--neutral-color] hover:border-[--primary-color] border-transparent border-2 rounded-2xl
        h-[400px] w-full">
          {/* inbox picture Set */}
          <div className="w-64 mx-auto top-0 mb-3 pt-5">
          <img
              className="object-scale-down h-48 w-80 rounded-2xl overflow-hidden shadow-md"
              src={this.props.data.picture!}
              alt=""
            />
            <div className="text-xl font-bold text-white flex items-center justify-center pt-4">
              {this.props.data.name}
            </div>
          </div>

          {/* set name and descrip of Menu */}
          <div className="flex flex-col justify-start items-center">
            <div className={`text-2xl ${this.props.data.status ? 'text-[--passed-color]' : 'text-[--incorrect-color]'}`}>{this.props.data.status ? "Ready": "Busy"}</div>
          </div>
        </div>
      </div>
    );
  }
}
