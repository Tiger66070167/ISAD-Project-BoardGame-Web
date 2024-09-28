"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import style from "../../food/food.module.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader } from "@/components/ui/card";

export default class foodOrderPage extends React.Component {
    render() {
        return (
            <div className="flex px-20 min-h-screen min-w-screen bg-[--neutrals-color] py-20">
                <h1>← กลับไป</h1>
                <div>
                    <h2 className="flex items-center px-20">Add Test</h2>
                    <Tabs
                    defaultValue="all"
                    className="mx-auto py-16 min-w-[200px] max-w-[1400px]"
                        >
                <TabsList className="grid min-w-[1000px] max-w-full lg:grid-cols-5 md:grid-cols-2 grid-cols-1 bg-[#292929] text-white mt-2 relative">
                    <TabsTrigger value="all">All Menu</TabsTrigger>
                    <TabsTrigger value="fastFood">Fast food</TabsTrigger>
                    <TabsTrigger value="singleFood">Dish</TabsTrigger>
                    <TabsTrigger value="dessert">Snack</TabsTrigger>
                    <TabsTrigger value="drink">Drink</TabsTrigger>
                </TabsList>
                <TabsContent value="all">
                    <div className={style["grid-layout-box"]}>
                    {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(() => (
                        <div className="flex justify-center items-center">
                        
                        </div>
                    ))}
                    </div>
                    </TabsContent>
                </Tabs>
                </div>
            </div>
        );
    }
}
