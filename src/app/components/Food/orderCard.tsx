"use client";
import React from "react";
import { foodMenu } from "../../../../utils/typeStorage/foodType";

export default class orderCard extends React.Component<{
  info: foodMenu;
  quantity: number;
  delete: Function;
}> {
  render() {
    return (
      <div className="w-full">
        <div className="w-full shadow-2xl mt-2 xl:block hidden">
          <div
            className="flex flex-rows left-11 bg-[#292929] hover:bg-[--neutral-color] hover:border-[--primary-color] border-transparent border-2 h-[200px] w-full rounded-2xl"
            onClick={() => {
              //alert("ฮั่นแน่ https://www.instagram.com/p/C_mNEalSbfS/");
            }}
          >
            {/* inbox picture Set */}
            <div className="w-[400px] mx-0 top-0  mb-3">
              <img
                src={this.props.info.picture}
                className="bg-center object-scale-down h-48 w-full rounded-2xl overflow-hidden shadow-md"
              ></img>
            </div>
            {/* set name and descrip of Menu */}
            <div className="grid grid-cols-2  w-full">
              <div className="grid grid-rows-3 text-justify mx-6 mt-5">
                {/* <div className=""> */}
                <div className="text-3xl  font-bold text-white ">
                  {this.props.info.name}
                </div>
                {/* Add button*/}

                <div className="text-lg text-white">
                  {this.props.info.description}
                </div>
              </div>
              <div className="grid grid-cols-3 text-center">
                <div className="grid justify-center items-center mt-4 text-3xl">
                  Quatity
                  <div className="text-center leading-3 w-[100px] h-[80px] text-3xl mt-5">
                    {this.props.quantity}
                  </div>
                </div>
                <div className="grid justify-center items-center mt-4 text-3xl">
                  Price
                  <div className="text-center leading-3 w-[100px] h-[80px] text-3xl mt-5">
                    {this.props.info.price! * this.props.quantity}
                  </div>
                </div>
                <div className="flex justify-center items-center pr-5">
                  <button
                    onClick={() => {
                      this.props.delete(this.props.info.food_id);
                    }}
                    className="w-full h-16 rounded-2xl text-3xl bg-[--incorrect-color] hover:bg-[--hover-incorrect-color] p-1 duration-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="min-w-full max-w-[600px] shadow-2xl mt-2 xl:hidden block">
          <div
            className="flex flex-col bg-[#292929] hover:bg-[--neutral-color] hover:border-[--primary-color] border-transparent border-2 rounded-2xl"
            onClick={() => {
              //alert("ฮั่นแน่ https://www.instagram.com/p/C_mNEalSbfS/");
            }}
          >
            {/* Image */}
            <div className="relative w-full h-[200px]">
              <img
                src={this.props.info.picture}
                className="absolute top-0 left-0 w-full h-full bg-center bg-cover rounded-2xl overflow-hidden shadow-md"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="text-3xl font-bold text-white mb-2">Name</div>
              <div className="text-lg text-white mb-4">{this.props.info.description}</div>

              <div className="flex justify-between items-center text-center">
                <div className="flex flex-col">
                  <span className="text-xl font-bold">Quantity</span>
                  <span className="text-2xl">{this.props.quantity}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold">Price</span>
                  <span className="text-2xl">{this.props.info.price! * this.props.quantity}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  this.props.delete(this.props.info.food_id);
                }}
                className="w-full mt-4 rounded-2xl bg-[--incorrect-color] hover:bg-[--hover-incorrect-color] p-1 duration-300"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
