import React from "react";
import { Button } from "@/components/ui/button";
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
      {/* inline content input box and list-item*/}
      <Tabs defaultValue="Food" className=" w-[1000px] mx-auto py-16">
        {" "}
        {/*h-1 for set height*/}
        {/* <div className="w-1 h-28"></div> */}
        {/* create column */}
        <TabsList className="grid w-full grid-cols-4 bg-[#292929] text-white mt-2">
          <TabsTrigger value="fastFood">ฟาสต์ฟู๊ด</TabsTrigger>
          <TabsTrigger value="singleFood">จานเดียว</TabsTrigger>
          <TabsTrigger value="dessert">ขนม</TabsTrigger>
          <TabsTrigger value="drink">เครื่องดื่ม</TabsTrigger>
        </TabsList>
        {/* content size */}
        <TabsContent value="fastFood">
        {/* <Card> */}
          {/* bg-[#292929] */}
          <div className="grid grid-cols-3 gap-6  h-full bg-[#171717] "> 
              {[0, 0, 0, 0, 0].map(() => (
                <FoodCard></FoodCard>
              ))}
          </div>
        {/* </Card> */}
        </TabsContent>
        <TabsContent value="singleFood">
        {/* <Card> */}
          {/* bg-[#292929] */}
          <div className="grid grid-cols-3 gap-6  h-full bg-[#171717] "> 
              {[0, 0, 0, 0].map(() => (
                <FoodCard></FoodCard>
              ))}
          </div>
        {/* </Card> */}
        </TabsContent>
        <TabsContent value="dessert">
        {/* <Card> */}
          {/* bg-[#292929] */}
          <div className="grid grid-cols-3 gap-6  h-full bg-[#171717] "> 
              {[0, 0, 0].map(() => (
                <FoodCard></FoodCard>
              ))}
          </div>
        {/* </Card> */}
        </TabsContent>
        <TabsContent value="drink">
        {/* <Card> */}
          {/* bg-[#292929] */}
          <div className="grid grid-cols-3 gap-6 h-full bg-[#171717]"> 
              {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(() => (
                <FoodCard></FoodCard>
              ))}
          </div>
        {/* </Card> */}
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default foodPage;
