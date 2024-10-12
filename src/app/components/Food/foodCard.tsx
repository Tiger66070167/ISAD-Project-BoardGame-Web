"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

interface FoodCardProps {
  id?: number;
  name?: string;
  price?: number;
  description?: string;
  pic?: string;
}

export default class foodCard extends React.Component<FoodCardProps> {
  render() {
    const { id, name, price, description, pic } = this.props;
    console.log(pic)
    return (
      <button>
        <Link href={`/food/foodDetail/${id}`}>
          <div className="w-[300px] shadow-2xl mt-2">
            <div className="flex flex-col justify-center items-center bg-[#292929] hover:bg-[--neutral-color] hover:border-[--primary-color] border-transparent border-2 h-[400px] w-full rounded-2xl">
              {/* inbox picture Set */}
              <div className="w-64 mx-auto top-0  mb-3">
                <div className="bg-center object-scale-down h-48 w-full rounded-2xl overflow-hidden shadow-md">
                {pic && (
                    <img
                      src={pic}
                      alt={name || "Food Image"}
                     className=" object-scale-down w-full h-full"
                      sizes="100vw"
                      style={{ objectFit: 'cover' }}
                    />
                  )}
                </div>
              </div>
              {/* set name and descrip of Menu */}
              <div className="grid grid-rows-3 text-justify items-center justify-center">
                {/* <div className=""> */}
                <div className="text-xl  font-bold text-white text-center">
                  {name}
                </div>
                {/* Add button*/}

                <div className="text-xm text-white leading-10 text-center">
                  {price}
                </div>
                <div className="text-xm text-white text-pretty text-center">
                  {description}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </button>
    );
  }
}
