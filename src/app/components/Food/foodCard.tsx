"use client";
import React from "react";
import { foodMenu } from "../../../../utils/typeStorage/foodType";
import FoodDetail from "@/app/food/[table_id]/FoodDetail";

export default class foodCard extends React.Component<{info: foodMenu, orderFood: Function}, {showOrder: boolean}> {
  constructor(props: {info: foodMenu, orderFood: Function}) {
    super(props)

    this.state = {
      showOrder: false
    }
  }

  setShowOrder(value: boolean) {this.setState({showOrder: value});}
  
  handleClose() {
    this.setShowOrder(false);
  }
  
  render() {
    const { food_id, name, price, description, picture } = this.props.info;
    return (
      <>
      {this.state.showOrder && <FoodDetail info={this.props.info} close={this.handleClose.bind(this)} order={this.props.orderFood} />}
      <button onClick={() => {this.setShowOrder(true)}}>
          <div className="w-[300px] shadow-2xl mt-2">
            <div className="flex flex-col justify-center items-center bg-[#292929] hover:bg-[--neutral-color] hover:border-[--primary-color] border-transparent border-2 h-[400px] w-full rounded-2xl">
              {/* inbox picture Set */}
              <div className="w-64 mx-auto top-0 mb-3 pt-5">
                <div className="bg-center object-scale-down h-48 w-full rounded-2xl overflow-hidden shadow-md">
                {picture && (
                    <img
                      src={picture}
                      alt={name || "Food Image"}
                     className=" object-scale-down w-full h-full"
                      sizes="100vw"
                      style={{ objectFit: 'cover' }}
                    />
                  )}
                </div>
              </div>
              {/* set name and descrip of Menu */}
              <div className="grid grid-rows-3 text-justify w-full h-full px-5">
                {/* <div className=""> */}
                <div className="justify-center flex items-center text-xl font-bold text-white text-center">
                  {name}
                </div>
                {/* Add button*/}
                <div className="text-xm text-white">
                  {price}
                </div>
                <div className="text-xm text-white">
                  {description}
                </div>
              </div>
            </div>
          </div>
      </button>
      </>
    );
  }
}
