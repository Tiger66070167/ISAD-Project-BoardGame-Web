import React from "react";
import { Button } from "@/components/ui/button";
import style from "./food.module.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FoodCard from "../components/foodCard";

function foodPage() {
  return (
    // content location
    <div className="min-h-screen min-w-screen bg-[--neutrals-color] py-6">
      {/* <div className="flex justify-center items-center laptop:pt-20 desktop:pt-28 laptop:px 96 desktop:px-[32rem] h-full laptop:pb-12 desktop:pb-22 mx-32">
          <div className="shadow-md rounded-lg bg-[#303030] flex flex-col w-full h-full pt-8"></div>
          
        </div> */}
      {/* inline content input box and list-item      min-w-[200px] max-w-[1400px]  */}
      <Tabs defaultValue="all" className="mx-auto py-16 min-w-[200px] max-w-[1400px]">
        {" "}
        {/*h-1 for set height*/}
        {/* <div className="w-1 h-28"></div> */}
        {/* create column */}
        <div className="flex justify-center">
          <TabsList className="grid min-w-[1000px] max-w-full lg:grid-cols-5 md:grid-cols-2 grid-cols-1 bg-[#292929] text-white mt-2 relative">
            <TabsTrigger value="all">All Menu</TabsTrigger>
            <TabsTrigger value="fastFood">Fast food</TabsTrigger>
            <TabsTrigger value="singleFood">Dish</TabsTrigger>
            <TabsTrigger value="dessert">Snack</TabsTrigger>
            <TabsTrigger value="drink">Drink</TabsTrigger>
          </TabsList>
          {/* create button */}
          <Button
            type="button"
            className=" absolute right-20 mt-1.5 mr-0 text-white bg-[--primary-color] hover:scale-105 bg-gradient-to-r hover:from-[--primary-color] hover:to-[--accent-color] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 delay-0"
          >
            {/* create Cart */}
            <svg
              className="w-6 h-7x me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 21"
            >
              <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
            </svg>
            {/* create circle and number of items */}
            <span className="inline-flex items-center justify-center w-8 h-8 ms-2 text-xl font-semibold text-blue-800 bg-blue-200 rounded-full">
              50
            </span>
          </Button>
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
      </Tabs>
    </div>
  );
}

export default foodPage;
