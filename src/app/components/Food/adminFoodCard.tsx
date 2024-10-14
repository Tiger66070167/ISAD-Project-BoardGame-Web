"use client";
import Link from "next/link";
import React from "react";
export default class adminFoodCard extends React.Component<{
  id?: number;
  name?: string;
  price?: number;
  description?: string;
  picture?:string;
}> {
  constructor(props: {
    id?: number;
    name?: string;
    price?: number;
    description?: string;
    picture?:string;
  }) {
    super(props);
  }

  render() {
    return (
      <button>
        <Link href={`/admin/modifyFood/foodEdit/${this.props.id}`}>
          <div className="w-[300px] shadow-2xl mt-2">
            <div
              className="flex flex-col justify-center items-center bg-[#292929] hover:bg-[--neutral-color] hover:border-[--primary-color] border-transparent border-2 h-[400px] w-full rounded-2xl"
            >
              {/* inbox picture Set */}
              <div className="w-64 mx-auto top-0 mb-3 pt-5">
                <div className="bg-center object-scale-down h-48 w-full rounded-2xl overflow-hidden shadow-md">
                <div className="bg-center object-scale-down h-48 w-full rounded-2xl overflow-hidden shadow-md">
                {this.props.picture && (
                    <img
                      src={this.props.picture}
                      alt={this.props.name || "Food Image"}
                     className=" object-scale-down w-full h-full"
                      sizes="100vw"
                      style={{ objectFit: 'cover' }}
                    />
                  )}
                </div>
                </div>
              </div>
              {/* set name and descrip of Menu */}
              <div className="grid grid-rows-3 text-justify w-full h-full px-5">
                {/* <div className=""> */}
                <div className="justify-center flex items-center text-xl font-bold text-white text-center">
                  {this.props.name}
                </div>
                {/* Add button*/}

                <div className="text-xm text-white">
                  ฿ {this.props.price}
                </div>
                <div className="text-xm text-white">
                  {this.props.description}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </button>
    );
  }
}
