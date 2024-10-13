"use client";
import React from "react";
import { foodMenu } from "../../../utils/typeStorage/foodType";
import Popup from "@/app/components/utilities/Popup";

interface getAlreadyFood {
  quantity: number;
}
export default class FoodDetail extends React.Component<{ info: foodMenu, close: Function, order: Function }, getAlreadyFood> {
  constructor(props: { info: foodMenu, close: Function, order: Function }) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }

  handleQuantityChange = (action: string) => {
    if (action === "increase") {
      this.setState((prevState) => ({ quantity: prevState.quantity + 1 }));
    } else if (action === "decrease" && this.state.quantity > 1) {
      this.setState((prevState) => ({ quantity: prevState.quantity - 1 }));
    }
  };

  handleOrder() {
    this.props.order(this.props.info, this.state.quantity);

    this.props.close();
  }

  render() {
    return (
      <Popup>
        <div className=" bg-[#292929] w-[500px] h-[600px] rounded-2xl text-center relative">
          <button onClick={() => {this.props.close()}} className="absolute right-[3%] top-[1%] p-[2%]">X</button>
          <div className="pt-3 text-[20px] text-center">{this.props.info.name}</div>
          <div className=" w-80 h-[200px] mx-auto">
            <div className="w-full h-full bg-center object-scale-down rounded-xl">
              {this.props.info.picture && (
                <img
                  src={this.props.info.picture}
                  alt={this.props.info.name || "Food Image"}
                  className=" object-scale-down w-full h-full rounded-xl"
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                />
              )}
            </div>
          </div>
          <div className=" text-center text-[25px] h-[80px]">
            <div>Price</div>
            {this.props.info && this.props.info.price ? this.props.info.price : "-"}
          </div>
          <div className="h-[80px] text-[25px] ">
            Sum Price
            <div>
              {this.props.info && this.props.info.price ? this.props.info.price * this.state.quantity : "-"}
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
              <div className="flex text-white ">{this.state.quantity}</div>
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
          <button
            className=" bottom-0 left-0 z-30 w-full py-8 px-16 bg-black backdrop-blur-xl bg-opacity-50 rounded-b-2xl"
            onClick={this.handleOrder.bind(this)}
          >
            <div className="flex bg-[--primary-color] min-w-screen h-[70px] rounded-2xl text-2xl text-black items-center justify-center cursor-pointer hover:scale-105">
              Order
            </div>
          </button>
        </div>
      </Popup>
    );
  }
}
