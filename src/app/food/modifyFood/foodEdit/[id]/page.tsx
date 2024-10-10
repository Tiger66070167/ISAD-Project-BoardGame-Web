"use client";

import React, { Component } from "react";
import Image from "next/image";
import Link from "next/link";
import { foodMenu } from "../../../../../../utils/typeStorage/foodType";
import foodFetcher from "../../../../../../utils/core/fetcher/tableFetcher/menuFetcher";
interface getAlreadyFood {
  menuFood: foodMenu | null;
}
export default class createBoardGame extends Component<
  { params: { id: number } },
  getAlreadyFood
> {
  constructor(props: { params: { id: number } }) {
    super(props);
    this.state = {
      menuFood: null,
    };
  }

  setFood(value: foodMenu) {
    this.setState({ menuFood: value });
  }

  async componentDidMount() {
    let food = new foodFetcher();
    try {
      const loadedFood = await food.getFood(this.props.params.id);
      this.setFood(loadedFood);
    } catch (error) {
      console.error("Error fetching food:", error);
    }
  }

  private async deleteHandler() {
    let deleteFood = new foodFetcher();
    await deleteFood.deleteFood(this.props.params.id);
  }
  render() {
    console.log(this.state.menuFood);
    console.log(this.props.params.id);
    return (
      <div className="min-h-screen min-w-screen bg-[--neutrals-color]">
        <div className="flex justify-center items-center tablet:pt-16 laptop:pt-20 desktop:pt-28  desktop:pb-22">
          <div className="shadow-md rounded-lg bg-[#303030]  w-[900px] desktop:w-[500px] h-auto pb-12">
            <div className="grid grid-cols-2">
              <div>
                <div className="tablet:text-2xl laptop:text-3xl desktop:text-4xl tablet:mt-2 laptop:mt-5 desktop:mt-7 font-black text-[--primary-color] flex justify-center items-center mb-5">
                  Modify Menu Edit
                </div>
                {/* Image */}
                <div className="flex flex-col justify-center items-center">
                  <Image
                    className="object-scale-down h-48 w-80 rounded-2xl overflow-hidden shadow-md"
                    src=""
                    alt=""
                  />
                  <div className="mt-5 flex flex-col justify-center items-center">
                    <label className="laptop:text-xl desktop:text-2xl font-semibold">
                      Choose Image
                    </label>
                    <input type="file" className="w-56" />
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <form className="flex flex-col items-center gap-y-10">
                  {/* Name */}
                  <div className="flex flex-col items-center w-full tablet:px-10 laptop:px-10 desktop:px-16">
                    <label className="tablet:text-lg laptop:text-xl desktop:text-2xl font-semibold">
                     Menu Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter menu name"
                      className="text-[#bababa] sm:text-sm
                bg-[#303030]
                mt-1 px-3 py-2
                w-full
                border-b border-slate-300 shadow-sm rounded-none
                focus:outline-none focus:border-[--primary-color] transition focus:duration-200"
                    />
                  </div>
                  {/* Name */}
                  <div className="flex flex-col items-center w-full tablet:px-10 laptop:px-10 desktop:px-16">
                    <label className="tablet:text-lg laptop:text-xl desktop:text-2xl font-semibold">
                     Menu Price
                    </label>
                    <input
                      type="text"
                      placeholder="Enter menu price"
                      className="text-[#bababa] sm:text-sm
                bg-[#303030]
                mt-1 px-3 py-2
                w-full
                border-b border-slate-300 shadow-sm rounded-none
                focus:outline-none focus:border-[--primary-color] transition focus:duration-200"
                    />
                  </div>
                  {/* Name */}
                  <div className="flex flex-col items-center w-full tablet:px-10 laptop:px-10 desktop:px-16">
                    <label className="tablet:text-lg laptop:text-xl desktop:text-2xl font-semibold">
                      Menu Description
                    </label>
                    <input
                      type="text"
                      placeholder="Enter menu description"
                      className="text-[#bababa] sm:text-sm
                bg-[#303030]
                mt-1 px-3 py-2
                w-full
                border-b border-slate-300 shadow-sm rounded-none
                focus:outline-none focus:border-[--primary-color] transition focus:duration-200"
                    />
                  </div>
                </form>
              </div>
            </div>
            <form className="flex justify-center">
              {/* Button */}
              <div className="flex gap-x-5">
                <Link href="/food/modifyFood/">
                  <button
                    className="tablet:px-3 tablet:py-1
                    laptop:px-3 laptop:py-1
                    desktop:px-6 desktop:py-2
                    bg-[--incorrect-color] rounded
                    hover:bg-[--hover-incorrect-color] duration-300"
                  >
                    Cancel
                  </button>
                </Link>
                <button
                  className="tablet:px-3 tablet:py-1
                  laptop:px-3 laptop:py-1
                  desktop:px-5 desktop:py-2
                  bg-[--secondary-color] rounded
                  hover:bg-[--passed-color] duration-300"
                >
                  Change
                </button>
                <Link href="/food/modifyFood/">
                  <button
                    className="px-5 py-1
                bg-[--incorrect-color] rounded
                hover:bg-[--hover-incorrect-color] duration-300"
                    onClick={this.deleteHandler.bind(this)}
                  >
                    Delete
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
