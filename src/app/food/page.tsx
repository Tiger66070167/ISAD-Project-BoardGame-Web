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

interface FoodPageState {
  selectedTab: string;
}

export default class foodPage extends React.Component<{}, FoodPageState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      selectedTab: "all",
    };
  }

  handleTabChange = (value: string) => {
    this.setState({ selectedTab: value });
  };

  render() {
    return (
      // content location
      <div className="min-h-screen min-w-screen bg-[--neutrals-color] py-6">
        <Tabs
          value={this.state.selectedTab}
          onValueChange={this.handleTabChange} // Add onValueChange to Tabs
          className="mx-auto py-16 min-w-full max-w-[1400px]"
        >
          <Select
            value={this.state.selectedTab}
            onValueChange={this.handleTabChange}
          >
            {/* Bind value and onValueChange to Select */}
            <div className="lg:hidden block px-4">
              <SelectTrigger className="flex w-full lg:hidden bg-[#292929] text-white bg-opacity-60 border-none hover:bg-[--primary-color]">
                <SelectValue placeholder="Categories" />
              </SelectTrigger>
            </div>
            <SelectContent className="bg-[#292929] text-white bg-opacity-60 border-none">
              <SelectGroup className="flex flex-col justify-center">
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="fastFood">FastFood</SelectItem>
                <SelectItem value="singleFood">Dish</SelectItem>
                <SelectItem value="dessert">Snack</SelectItem>
                <SelectItem value="drink">Drink</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="flex justify-center">
            <div className="justify-center lg:block hidden">
              <TabsList className="grid min-w-[1000px] transition md:min-w-[600px] lg:grid-cols-5 md:grid-cols-5 grid-cols-1 bg-[#292929] text-white mt-2 relative">
                <TabsTrigger value="all">All Menu</TabsTrigger>
                <TabsTrigger value="fastFood">Fast food</TabsTrigger>
                <TabsTrigger value="singleFood">Dish</TabsTrigger>
                <TabsTrigger value="dessert">Snack</TabsTrigger>
                <TabsTrigger value="drink">Drink</TabsTrigger>
              </TabsList>
            </div>
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
            <div className={style["grid-layout-box"]}>
              {[0].map(() => (
                <div className="flex justify-center items-center">
                  <FoodCard></FoodCard>
                </div>
              ))}
            </div>
            {/* </Card> */}
          </TabsContent>
          <TabsContent value="singleFood">
            {/* <Card> */}
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
            <div className={style["grid-layout-box"]}>
              {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(() => (
                <div className="flex justify-center items-center">
                  <FoodCard></FoodCard>
                </div>
              ))}
            </div>
          </TabsContent>
          <div className="md:hidden fixed bottom-0 left-0 z-30 w-full py-8 px-16 bg-neutral-800 backdrop-blur-xl bg-opacity-50">
            <div className="flex bg-[--primary-color] min-w-screen h-[70px] rounded-2xl text-2xl text-black items-center justify-center cursor-pointer">
              Order
            </div>
          </div>
        </Tabs>
      </div>
    );
  }
}
