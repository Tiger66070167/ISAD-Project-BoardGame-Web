"use client";

import React from "react";
import style from "./stylesheets/foodOrder.module.css";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import OrderCard from "@/app/components/Food/orderCard";
import Popup from "@/app/components/utilities/Popup";
import { foodMenu } from "../../../../utils/typeStorage/foodType";
import orderFetcher from "../../../../utils/core/fetcher/tableFetcher/orderFetcher";
export default class FoodOrder extends React.Component<{ foodOrders: { menu: foodMenu, quantity: number }[], enable: Function, delete: Function, table_id: number }, {loading: boolean}> {
  constructor(props: { foodOrders: { menu: foodMenu, quantity: number }[], enable: Function, delete: Function, table_id: number }) {
    super(props);

    this.state = {
      loading: false
    }
  }

  setLoading(value:boolean) {this.setState({loading: value})}

  async handleOrder() {
    this.setLoading(true);

    let orderFet: orderFetcher = new orderFetcher();
    for (let i = 0; i < this.props.foodOrders.length; i++) {
      await orderFet.chooseFood(this.props.table_id, this.props.foodOrders[i].menu.food_id, this.props.foodOrders[i].quantity);
    }

    this.setLoading(false);
    window.location.reload();
  }

  render() {
    let sum = 0;
    let money = 0;
    this.props.foodOrders.forEach((value) => {
      sum += value.quantity;
      money += value.menu.price! * value.quantity;
    })

    return (
      <Popup>
        <div className=" p-[2%] h-[90%] w-[90%] bg-[--neutrals-color] rounded-3xl">
          <button onClick={() => { this.props.enable(false) }} className="w-[130px] items-center  justify-centerh-[50px] border-[--primary-color] hover:bg-[--primary-color] border-1 p-1 rounded-xl duration-300">
              Back
          </button>
          <div className="overflow-scroll h-[80%]">
            <Tabs
              defaultValue="all"
              className="mx-auto py-3 min-w-full max-w-[1400px]"
            >
              <div className="min-w-full max-w-[1000px]">
                <TabsContent value="all">
                  <div className={style["grid-layout-box"]}>
                    {this.props.foodOrders.map((value) => (
                      <div className="flex justify-center items-center" key={value.menu.food_id}>
                        <OrderCard info={value.menu} quantity={value.quantity} delete={this.props.delete.bind(this)}></OrderCard>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
          <div className="flex justify-between items-center h-[15%] px-[5%]">
            <div>
              <h1 className="text-2xl">Total {sum} items totaling {money} baht</h1>
            </div>
            <button className="border-[--secondary-color] hover:border-[--passed-color] hover:bg-[--passed-color] duration-300 border-2 px-[2rem] py-[0.5rem] rounded-xl disabled:opacity-50" onClick={this.handleOrder.bind(this)} disabled={this.state.loading}>{(this.state.loading) ? "Loading" : "Confirm"}</button>
          </div>
        </div>
      </Popup>
    );
  }
}
