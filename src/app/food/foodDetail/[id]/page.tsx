"use client";
import React, { useState, useEffect } from "react";
import { foodMenu } from "../../../../../utils/typeStorage/foodType";
import foodFetcher from "../../../../../utils/core/fetcher/tableFetcher/menuFetcher";

interface getAlreadyFood {
  menuFood: foodMenu | null;
  quantity: number;
}

export default class foodDetail extends React.Component<
  { params: { id: number } },
  getAlreadyFood
> {
  constructor(props: { params: { id: number } }) {
    super(props);
    this.state = {
      menuFood: null,
      quantity: 1,
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

  handleQuantityChange = (action: string) => {
    if (action === "increase") {
      this.setState((prevState) => ({ quantity: prevState.quantity + 1 }));
    } else if (action === "decrease" && this.state.quantity > 1) {
      this.setState((prevState) => ({ quantity: prevState.quantity - 1 }));
    }
  };

  render() {
    const { menuFood, quantity } = this.state;

    if (!menuFood) { 
      return (
        <div className="text-white flex px-20 min-h-screen min-w-screen justify-center bg-[--neutrals-color] py-20">
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-[--primary-color]"></div>
        </div>
      );
    }

    return (
      <div className="text-white flex px-20 min-h-screen min-w-screen justify-center bg-[--neutrals-color] py-20">
        <div className=" bg-[#292929] w-[500px] h-[600px] rounded-2xl text-center">
          <div className="pt-3 text-[20px] text-center">{menuFood.name}</div>
          <div className=" w-80 h-[200px] mx-auto">
            <div className="bg-[url('../assets/homeSegtion2.png')] w-full h-full bg-center object-scale-down rounded-xl"></div>
          </div>
          <div className=" text-center text-[25px] h-[80px]">
            <div>Price</div>
            {menuFood && menuFood.price ? menuFood.price : "-"}
          </div>
          <div className="h-[80px] text-[25px] ">
            Sum Price
            <div>
              {menuFood && menuFood.price ? menuFood.price * quantity : "-"}
            </div>
          </div>

          <div className="grid grid-cols-3 h-[100px] ">
            <button
              className="flex items-center justify-center text-[60px] bg-neutral-900 rounded-xl w-[100px] h-[80px] self-center mx-auto hover:border-[--primary-color] hover:border-2"
              onClick={() => {
                this.handleQuantityChange("decrease");
              }}
            >
              -
            </button>
            <div className="flex justify-center text-[60px] bg-neutral-900  backdrop-blur-xl bg-opacity-50 h-[100px] rounded-t-xl border-gray-400 border-2">
              <div className="flex text-white ">{quantity}</div>
            </div>
            <button
              className="flex items-center justify-center text-[60px] bg-neutral-900 rounded-xl w-[100px] h-[80px] self-center mx-auto hover:border-[--primary-color] hover:border-2"
              onClick={() => {
                this.handleQuantityChange("increase");
              }}
            >
              +
            </button>
          </div>
          <div className=" bottom-0 left-0 z-30 w-full py-8 px-16 bg-black backdrop-blur-xl bg-opacity-50 rounded-b-2xl">
            <div className="flex bg-[--primary-color] min-w-screen h-[70px] rounded-2xl text-2xl text-black items-center justify-center cursor-pointer hover:scale-105">
              Order
            </div>
          </div>
        </div>
      </div>
    );
  }
}
