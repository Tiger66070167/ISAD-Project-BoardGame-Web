"use client";

import React from "react";
import style from "./stylesheets/food.module.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FoodCard from "../../components/Food/foodCard";
import CartButton from "../../components/Food/cartButton";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { foodMenu } from "../../../../utils/typeStorage/foodType";
import foodFetcher from "../../../../utils/core/fetcher/tableFetcher/menuFetcher";
import FoodOrder from "./FoodOrder";

interface FoodPageState {
  selectedTab: string;
  allFood: Array<foodMenu>;
  foodOrders: {menu: foodMenu, quantity: number}[];
  showBasket: boolean;
}

export default class foodPage extends React.Component<{params: {table_id: number}}, FoodPageState> {
  constructor(props: {params: {table_id: number}}) {
    super(props);
    this.state = {
      selectedTab: "all",
      allFood: [],
      foodOrders: [],
      showBasket: false
    };
  }

  setAllFood(value: Array<foodMenu>) {this.setState({ allFood: value });}
  setShowBasket(value: boolean) {this.setState({showBasket: value});}
  setFoodOrders(value: {menu: foodMenu, quantity: number}[]) {this.setState({foodOrders: value});}

  addOrder(menu: foodMenu, quantity: number) {
    let newOrder: {menu: foodMenu, quantity: number}[] = [];
    let founded = false;
    this.state.foodOrders.forEach((order) => {
      if (order.menu.food_id === menu.food_id) {
        newOrder.push({menu, quantity});
        founded = true;
      } else {
        newOrder.push(order);
      }
    })
    if (!founded) {
      newOrder.push({menu, quantity})
    }

    this.setFoodOrders(newOrder);
  }

  handleDelete(food_id: number) {
    let newOrder: {menu: foodMenu, quantity: number}[] = [];
    this.state.foodOrders.forEach((value) => {
      if (value.menu.food_id !== food_id) {
        newOrder.push(value);
      }
    })

    this.setFoodOrders(newOrder);
  }

  async componentDidMount() {
    let food = new foodFetcher();
    this.setAllFood(await food.getAllFood());
  }

  handleTabChange = (value: string) => {
    this.setState({ selectedTab: value });
  };

  render() {
    const { allFood } = this.state;

    if (!allFood.length) {
      return (
        <div className="text-white flex px-20 min-h-screen min-w-screen justify-center bg-[--neutrals-color] py-20">
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-[--primary-color]"></div>
        </div>
      );
    }

    return (
      <>
      {this.state.showBasket && <FoodOrder table_id={this.props.params.table_id} foodOrders={this.state.foodOrders} enable={this.setShowBasket.bind(this)} delete={this.handleDelete.bind(this)} />}
      <div className="min-h-screen min-w-screen bg-[--neutrals-color] py-6">
        <Tabs
          value={this.state.selectedTab}
          onValueChange={this.handleTabChange}
          className="mx-auto py-16 min-w-full max-w-[1400px]"
        >
          <Select
            value={this.state.selectedTab}
            onValueChange={this.handleTabChange}
          >
            <div className="lg:hidden block px-4">
              <SelectTrigger className="flex w-full lg:hidden bg-[#292929] text-white bg-opacity-60 border-none hover:bg-[--primary-color]">
                <SelectValue placeholder="Categories" />
              </SelectTrigger>
            </div>
            <SelectContent className="bg-[#292929] text-white bg-opacity-60 border-none">
              <SelectGroup className="flex flex-col justify-center">
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="fastFood">FastFood</SelectItem>
                <SelectItem value="Dish">Dish</SelectItem>
                <SelectItem value="Snack">Snack</SelectItem>
                <SelectItem value="drink">Drink</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="flex justify-center">
            <div className="justify-center lg:block hidden">
              <TabsList className="grid min-w-[1000px] transition md:min-w-[600px] lg:grid-cols-5 md:grid-cols-5 grid-cols-1 bg-[#292929] text-white mt-2 relative">
                <TabsTrigger value="all">All Menu</TabsTrigger>
                <TabsTrigger value="fastFood">Fast food</TabsTrigger>
                <TabsTrigger value="Dish">Dish</TabsTrigger>
                <TabsTrigger value="Snack">Snack</TabsTrigger>
                <TabsTrigger value="drink">Drink</TabsTrigger>
              </TabsList>
            </div>
            <div className="lg:block hidden">
              <CartButton show={this.setShowBasket.bind(this)} amount={this.state.foodOrders.length}></CartButton>
            </div>
          </div>

          <TabsContent value="all">
            <div className={style["grid-layout-box"]}>
              {this.state.allFood.map((value) => (
                <div className="flex justify-center items-center" key={value.food_id}>
                  <FoodCard
                    info={value}
                    orderFood={this.addOrder.bind(this)}
                  ></FoodCard>
                </div>
              ))}
            </div>
          </TabsContent>
          {/* content size */}
          <TabsContent value="fastFood">
            {/* <Card> */}
            <div className={style["grid-layout-box"]}>
              {this.state.allFood
                .filter((value) => value.type === "Fast food")
                .map((value) => (
                  <div className="flex justify-center items-center" key={value.food_id}>
                    <FoodCard
                      info={value}
                      orderFood={this.addOrder.bind(this)}
                    ></FoodCard>
                  </div>
                ))}
            </div>
            {/* </Card> */}
          </TabsContent>
          <TabsContent value="Dish">
            {/* <Card> */}
            <div className={style["grid-layout-box"]}>
              {this.state.allFood
                .filter((value) => value.type === "Dish")
                .map((value) => (
                  <div className="flex justify-center items-center" key={value.food_id}>
                    <FoodCard
                      info={value}
                      orderFood={this.addOrder.bind(this)}
                    ></FoodCard>
                  </div>
                ))}
            </div>
            {/* </Card> */}
          </TabsContent>
          <TabsContent value="Snack">
            {/* <Card> */}
            <div className={style["grid-layout-box"]}>
              {this.state.allFood
                .filter((value) => value.type === "Snack")
                .map((value) => (
                  <div className="flex justify-center items-center" key={value.food_id}>
                    <FoodCard
                      info={value}
                      orderFood={this.addOrder.bind(this)}
                    ></FoodCard>
                  </div>
                ))}
            </div>
            {/* </Card> */}
          </TabsContent>
          <TabsContent value="drink">
            {/* <Card> */}
            <div className={style["grid-layout-box"]}>
              {this.state.allFood
                .filter((value) => value.type === "Drink")
                .map((value) => (
                  <div className="flex justify-center items-center" key={value.food_id}>
                    <FoodCard
                      info={value}
                      orderFood={this.addOrder.bind(this)}
                    ></FoodCard>
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
      </>
    );
  }
}
