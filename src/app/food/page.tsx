"use client";

import React from "react";
import style from "./food.module.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FoodCard from "../components/Food/foodCard";
import CartButton from "../components/Food/cartButton";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default class foodPage extends React.Component {
  render() {
    return (
      // content location
      <div className="min-h-screen min-w-screen bg-[--neutrals-color] py-6">
        <Tabs
          defaultValue="all"
          className="mx-auto py-16 min-w-[200px] max-w-[1400px]"
        >
          <div className="flex justify-center">
            {/* Button on PC */}
            <Select>
              <SelectTrigger className=" justify-center w-[300px] lg:hidden bg-[#292929] text-white bg-opacity-60 border-none hover:bg-[--primary-color]">
                <SelectValue placeholder="Categories"/>
              </SelectTrigger>
              <SelectContent className="bg-[#292929] text-white bg-opacity-60 border-none">
                <SelectGroup >
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="fastFood">Fast food</SelectItem>
                  <SelectItem value="singlefood">Dish</SelectItem>
                  <SelectItem value="dessert">Snack</SelectItem>
                  <SelectItem value="drink">Drink</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <div className="justify-center lg:block hidden">
              <TabsList className="grid min-w-[1000px] transition md:min-w-[600px] lg:grid-cols-5 md:grid-cols-5 grid-cols-1 bg-[#292929] text-white mt-2 relative">
                <TabsTrigger value="all">All Menu</TabsTrigger>
                <TabsTrigger value="fastFood">Fast food</TabsTrigger>
                <TabsTrigger value="singleFood">Dish</TabsTrigger>
                <TabsTrigger value="dessert">Snack</TabsTrigger>
                <TabsTrigger value="drink">Drink</TabsTrigger>
              </TabsList>
              {/* Select Drop Down for Mobile and Mini Screen */}
            </div>
            {/* create button */}
            <div className="lg:block hidden">
              <CartButton></CartButton>
            </div>
          </div>

          <TabsContent value="all">
            <div className={style["grid-layout-box"]}>
              {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(() => (
                <div className="flex justify-center items-center">
                  <FoodCard></FoodCard>
                </div>
              ))}
            </div>
          </TabsContent>
          {/* content size */}
          <TabsContent value="fastFood">
            {/* <Card> */}
            {/* bg-[#292929] */}
            <div className={style["grid-layout-box"]}>
              {[0, 0, 0, 0, 0].map(() => (
                <div className="flex justify-center items-center">
                  <FoodCard></FoodCard>
                </div>
              ))}
            </div>
            {/* </Card> */}
          </TabsContent>
          <TabsContent value="singleFood">
            {/* <Card> */}
            {/* bg-[#292929] */}
            <div className={style["grid-layout-box"]}>
              {[0, 0, 0, 0].map(() => (
                <div className="flex justify-center items-center">
                  <FoodCard></FoodCard>
                </div>
              ))}
            </div>
            {/* </Card> */}
          </TabsContent>
          <TabsContent value="dessert">
            {/* <Card> */}
            {/* bg-[#292929] */}
            <div className={style["grid-layout-box"]}>
              {[0, 0, 0].map(() => (
                <div className="flex justify-center items-center">
                  <FoodCard></FoodCard>
                </div>
              ))}
            </div>
            {/* </Card> */}
          </TabsContent>
          <TabsContent value="drink">
            {/* <Card> */}
            {/* bg-[#292929] */}
            <div className={style["grid-layout-box"]}>
              {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(() => (
                <div className="flex justify-center items-center">
                  <FoodCard></FoodCard>
                </div>
              ))}
            </div>
            {/* </Card> */}
          </TabsContent>
          <div className="lg:hidden fixed bottom-0 left-0 z-30 w-full py-8 px-16 bg-neutral-800 backdrop-blur-xl bg-opacity-50">
            <div className="flex bg-[--primary-color] min-w-screen h-[70px] rounded-2xl text-2xl text-black items-center justify-center cursor-pointer">
              Order
            </div>
          </div>
        </Tabs>
      </div>
    );
  }
}
