"use client";

import React from "react";

import style from "../../food/foodOrder/foodOrder.module.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader } from "@/components/ui/card";
import OrderCard from "@/app/components/Food/orderCard";
import Link from "next/link";
export default class foodOrderPage extends React.Component {
  render() {
    return (
      <div className=" px-20 min-h-screen min-w-screen bg-[--neutrals-color] py-20">
        <button className="w-[150px] items-center  justify-centerh-[50px] hover:border-[--neutrals-color] border-[--primary-color] border-2 hover:bg-gradient-to-r from-[--primary-color] to-[--accent-color] p-1 rounded-xl">
            <Link href="/food" >
            <div className="flex justify-center items-center text-xl bg-[--neutrals-color] w-full  h-full rounded-xl">Back</div>
            </Link>
        </button>
        <Tabs
          defaultValue="all"
          className="mx-auto py-3 min-w-full max-w-[1400px]"
        >
          <div className="min-w-full max-w-[1000px]">

            <TabsContent value="all">
            <div className={style["grid-layout-box"]}>
              {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(() => (
                <div className="flex justify-center items-center">
                <OrderCard></OrderCard>
                </div>
              ))}
            </div>
          </TabsContent>
          </div>
        </Tabs>
      </div>
    );
  }
}
