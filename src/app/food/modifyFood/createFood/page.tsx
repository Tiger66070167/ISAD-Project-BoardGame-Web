"use client";

import React, { Component } from "react";
import Image from "next/image";
import Link from "next/link";
import { foodMenu } from "../../../../../utils/typeStorage/foodType";
import foodFetcher from "../../../../../utils/core/fetcher/tableFetcher/menuFetcher";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
export default class createFoodMenu extends Component{
    state = {
        error: '',
        loading: false,
        success: false
      };
      constructor(prop: any) {
        super(prop);
      }
      setError(value: string) {
        this.setState({error: value});
      }
    
      setLoading(value: boolean) {
        this.setState({loading: value});
      }
    
      setSuccess(value: boolean) {
        this.setState({success: value})
      }
      async checkCreateMenu() {
        
        this.setSuccess(false);
        this.setLoading(true);
        this.setError('');

        let food = new foodFetcher();
        let menuName: any = document.querySelector('.menuName')!;
        let menuPrice: any = document.querySelector('.menuPrice')!;
        let menuDescription: any = document.querySelector('.menuDescription')!;
        let menuType: any = document.querySelector('.menuType')!;
        let menuPic: any = document.querySelector('.menuPic'); ///////////Temporaly
        
        
        if (!menuName.value || !menuPrice.value || !menuDescription.value || !menuType.value || !menuPic.value) {
          this.setError('Please insert all the information');
          this.setLoading(false);
          return;
        } else if (await food.addFood(menuName.value, menuPrice.value, menuDescription.value,menuType.value,menuPic)) {
          this.setSuccess(true);
        } else {
          this.setError("Fail to Create Food");
        }
    
        menuName.value = '';
        menuPrice.value = 0;
        menuDescription.value = '';
        menuType.value = '';
        menuPic.value = '';
    
        this.setLoading(false);
      }     



  render() {
    return (
      <div className="min-h-screen min-w-screen bg-[--neutrals-color]">
        <div className="flex justify-center items-center tablet:pt-16 laptop:pt-20 desktop:pt-28  desktop:pb-22">
          <div className="shadow-md rounded-lg bg-[#303030]  w-[900px] desktop:w-[500px] h-auto pb-12">
            <div className="grid grid-cols-2">
              <div>
                <div className="tablet:text-2xl laptop:text-3xl desktop:text-4xl tablet:mt-2 laptop:mt-5 desktop:mt-7 font-black text-[--primary-color] flex justify-center items-center mb-5">
                 Create Menu
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
              <div className="">
                <form className="grid grid-rows-4 pt-4 items-center gap-y-10">
                  {/* Name */}
                  <div className="flex flex-col items-center w-full tablet:px-10 laptop:px-10 desktop:px-16 ">
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
                  {/* Price */}
                  <div className="flex flex-col items-center w-full tablet:px-10 laptop:px-10 desktop:px-16 ">
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
                  {/* Description */}
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
                  {/* Description */}
                  <div className="flex flex-col items-center w-full tablet:px-10 laptop:px-10 desktop:px-16  pb-4 ">
                    <label className="tablet:text-lg laptop:text-xl desktop:text-2xl font-semibold">
                      Menu Description
                    </label>
                    <Select>
                        <div className="w-full mt-2">
                        <SelectTrigger className="flex w-full  bg-[#292929] text-[#bababa] bg-opacity-60 border-none hover:bg-[--primary-color]">
                            <SelectValue placeholder="select food type"/>
                        </SelectTrigger>
                        </div>
                        <SelectContent className="bg-[#292929] text-white bg-opacity-60 border-none">
                            <SelectGroup className="flex flex-col justify-center">
                                <SelectItem className="hover:bg-white" value="fast food">Fast Food</SelectItem>
                                <SelectItem value="dish">Dish</SelectItem>
                                <SelectItem value="snack">Snack</SelectItem>
                                <SelectItem value="drink">Drink</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
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
                  Confirm
                </button>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
