"use client";

import React from "react";
import style from "./foodEdit.module.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminFoodCard from "../../components/Food/adminFoodCard";
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
import Link from "next/link";

interface FoodPageState {
  selectedTab: string;
  allFood: Array<foodMenu>;
  loading:boolean,
  success:boolean,
}

export default class foodPage extends React.Component<{}, FoodPageState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      selectedTab: "all",
      allFood: [],
      loading: true,
      success: false,

    };
  }
  setLoading(value: boolean) {
    this.setState({loading: value});
  }

  setSuccess(value: boolean) {
    this.setState({success: value})
  }

  setAllFood(value: Array<foodMenu>) {
    this.setState({ allFood: value });
    this.setSuccess(true);
    this.setLoading(false)
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

    if (this.state.loading) {
      return (
        <div className="text-white flex px-20 min-h-screen min-w-screen justify-center bg-[--neutrals-color] py-20">
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-[--primary-color]"></div>
        </div>
      );
    }
    return (
      <div className="min-h-screen min-w-screen bg-[--neutrals-color] py-16">
        <div className="flex flex-row">
          <div className=" mx-auto text-center text-[#5865F2] font-black tablet:text-xl laptop:text-3xl desktop:text-4xl">
            Select Menu to Edit
          </div>
        </div>
        <div className="flex mx-auto justify-center items-center w-[160px] h-[50px] mb-3 gap-[1vw]">
          <Link href="/admin/modifyFood/createFood">
            <button className="hover:border-2 bg-[#292929]  hover:border-[--primary-color] rounded-xl w-[160px] h-[50px]">
              Create Menu
            </button>
          </Link>
          <Link href={"/admin/foodStaff"}>
            <button className="hover:border-2 bg-[#292929]  hover:border-[--primary-color] rounded-xl w-[160px] h-[50px]">
              Check order
            </button>
          </Link>
        </div>
        <Tabs
          value={this.state.selectedTab}
          onValueChange={this.handleTabChange}
          className="mx-auto py-0 mt-0 min-w-full max-w-[1400px]"
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
          </div>

          <TabsContent value="all">
            <div className={style["grid-layout-box"]}>
              {this.state.allFood.map((value) => (
                <div className="flex justify-center items-center">
                  <AdminFoodCard
                    id={value.food_id}
                    name={value.name}
                    price={value.price}
                    description={value.description}
                    picture={value.picture}
                  ></AdminFoodCard>
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
                  <div className="flex justify-center items-center">
                    <AdminFoodCard
                      id={value.food_id}
                      name={value.name}
                      price={value.price}
                      description={value.description}
                      picture={value.picture}
                    ></AdminFoodCard>
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
                  <div className="flex justify-center items-center">
                    <AdminFoodCard
                      id={value.food_id}
                      name={value.name}
                      price={value.price}
                      description={value.description}
                      picture={value.picture}
                    ></AdminFoodCard>
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
                  <div className="flex justify-center items-center">
                    <AdminFoodCard
                      id={value.food_id}
                      name={value.name}
                      price={value.price}
                      description={value.description}
                      picture={value.picture}
                    ></AdminFoodCard>
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
                  <div className="flex justify-center items-center">
                    <AdminFoodCard
                      id={value.food_id}
                      name={value.name}
                      price={value.price}
                      description={value.description}
                      picture={value.picture}
                    ></AdminFoodCard>
                  </div>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    );
  }
}
