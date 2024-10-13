"use client";

import React, { Component } from "react";
import Link from "next/link";
import { foodMenu } from "../../../../../../utils/typeStorage/foodType";
import foodFetcher from "../../../../../../utils/core/fetcher/tableFetcher/menuFetcher";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
interface CreateFoodMenuState {
  selectedMenuType: string;
  menuFood: foodMenu | null;
}

export default class createBoardGame extends Component<
  { params: { id: number } },
  CreateFoodMenuState
> {
  state: CreateFoodMenuState = { selectedMenuType: "", menuFood: null };
  constructor(props: { params: { id: number } }) {
    super(props);
    this.changePic = this.changePic.bind(this);
    this.handleMenuTypeChange = this.handleMenuTypeChange.bind(this);
    this.editHandler = this.editHandler.bind(this);
    this.handleTypetoString = this.handleTypetoString.bind(this);
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

  private async deleteHandler() {
    let deleteFood = new foodFetcher();
    await deleteFood.deleteFood(this.props.params.id);
  }
  private async editHandler(event: any) {
    event.preventDefault();
    try {
      let editFood = new foodFetcher();
      console.log(event.target.elements.menuName.value);
      await editFood.updateFood(
        this.props.params.id,
        event.target.elements.menuName.value,
        this.state.selectedMenuType,
        event.target.elements.menuDescription.value,
        event.target.elements.menuPrice.value,
        event.target.elements.picture.files[0]
      );

      let image: HTMLImageElement | null = document.querySelector(".image");
      if (image && event.target.elements.picture.files[0]) {
        image.src = URL.createObjectURL(event.target.elements.picture.files[0]);
      } else {
        console.warn("Image element or file not found");
      }

      window.history.back();
    } catch (error) {
      console.error("Error editing food:", error);
    }
  }
  changePic() {
    let image: HTMLImageElement = document.querySelector(".image")!;
    let file: HTMLInputElement = document.querySelector(".pic")!;
    image.src = URL.createObjectURL(file.files![0]);
  }
  handleMenuTypeChange(value: string) {
    console.log("Selected Menu Type:", value);
    this.setState({ selectedMenuType: value });
  }
  handleTypetoString(value: number) {
    let type_string = "";
    switch (value) {
      case 1:
        type_string = "Fast food";
        break;
      case 2:
        type_string = "Dish";
        break;
      case 3:
        type_string = "Snack";
        break;
      case 4:
        type_string = "Drink";
        break;
    }
    return type_string;
  }
  render() {

  let menuTypePlaceholder = this.state.menuFood?.type ? this.handleTypetoString(this.state.menuFood.type as number)  : "";
    // console.log(this.state.menuFood);
    // console.log(this.props.params.id);
    return (
      <div className="min-h-screen min-w-screen bg-[--neutrals-color]">
        <div className="flex justify-center items-center tablet:pt-16 laptop:pt-20 desktop:pt-28  desktop:pb-22">
          <div className="shadow-md rounded-lg bg-[#303030]  w-[900px] desktop:w-[500px] h-auto pb-12">
            <form
              className=" justify-center items-center"
              onSubmit={this.editHandler}
            >
              <div className="grid grid-cols-2">
                <div>
                  <div className="tablet:text-2xl laptop:text-3xl desktop:text-4xl tablet:mt-2 laptop:mt-5 desktop:mt-7 font-black text-[--primary-color] flex justify-center items-center mb-5">
                    Edit Menu
                  </div>
                  {/* Image */}
                  <div className="flex flex-col justify-center items-center">
                    {this.state.menuFood?.picture && (
                      <img
                        src={this.state.menuFood?.picture}
                        alt={this.state.menuFood?.name || "Food Image"}
                        className="image xobject-scale-down h-48 w-80 rounded-2xl overflow-hidden shadow-md"
                        sizes="100vw"
                        style={{ objectFit: "cover" }}
                      />
                    )}
                    <div className="mt-5 flex flex-col justify-center items-center">
                      <label className="laptop:text-xl desktop:text-2xl font-semibold">
                        Choose Image
                      </label>
                      <input
                        onChange={this.changePic.bind(this)}
                        name="picture"
                        type="file"
                        className="pic w-56"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-rows-4 pt-4 items-center gap-y-10">
                  {/* Name */}
                  <div className="flex flex-col items-center w-full tablet:px-10 laptop:px-10 desktop:px-16 ">
                    <label className="tablet:text-lg laptop:text-xl desktop:text-2xl font-semibold">
                      Menu Name
                    </label>
                    <input
                      name="menuName"
                      type="text"
                      placeholder={this.state.menuFood?.name}
                      className="text-[#bababa] sm:text-sm
                bg-[#303030]
                mt-1 px-3 py-2
                w-full
                border-b border-slate-300 shadow-sm rounded-none
                focus:outline-none focus:border-[--primary-color] transition focus:duration-200"
                    />
                  </div>
                  {/* Price */}
                  <div className="flex flex-col items-center w-full tablet:px-10 laptop:px-10 desktop:px-16 ">
                    <label className="tablet:text-lg laptop:text-xl desktop:text-2xl font-semibold">
                      Menu Price
                    </label>
                    <input
                      name="menuPrice"
                      type="text"
                      placeholder={
                        this.state.menuFood?.price
                          ? String(this.state.menuFood.price)
                          : ""
                      }
                      className="text-[#bababa] sm:text-sm
                bg-[#303030]
                mt-1 px-3 py-2
                w-full
                border-b border-slate-300 shadow-sm rounded-none
                focus:outline-none focus:border-[--primary-color] transition focus:duration-200"
                    />
                  </div>
                  {/* Description */}
                  <div className="flex flex-col items-center w-full tablet:px-10 laptop:px-10 desktop:px-16">
                    <label className="tablet:text-lg laptop:text-xl desktop:text-2xl font-semibold">
                      Menu Description
                    </label>
                    <input
                      name="menuDescription"
                      type="text"
                      placeholder={this.state.menuFood?.description}
                      className="text-[#bababa] sm:text-sm
                bg-[#303030]
                mt-1 px-3 py-2
                w-full
                border-b border-slate-300 shadow-sm rounded-none
                focus:outline-none focus:border-[--primary-color] transition focus:duration-200"
                    />
                  </div>
                  {/* Type */}
                  <div className="flex flex-col items-center w-full tablet:px-10 laptop:px-10 desktop:px-16  pb-4 ">
                    <label className="tablet:text-lg laptop:text-xl desktop:text-2xl font-semibold">
                      Menu Type
                    </label>
                    <Select
                      onValueChange={this.handleMenuTypeChange.bind(this)}
                      defaultValue={this.state.menuFood?.type?.toString() || ''}
                    >
                      <div className="w-full mt-2">
                        <SelectTrigger className="flex w-full  bg-[#292929] text-[#bababa] bg-opacity-60 border-none hover:bg-[--primary-color]">
                          <SelectValue
                            placeholder={menuTypePlaceholder}
                          />
                        </SelectTrigger>
                      </div>
                      <SelectContent className="bg-[#292929] text-white bg-opacity-60 border-none">
                        <SelectGroup className="flex flex-col justify-center">
                          <SelectItem value="Fast food">Fast Food</SelectItem>
                          <SelectItem value="Dish">Dish</SelectItem>
                          <SelectItem value="Snack">Snack</SelectItem>
                          <SelectItem value="Drink">Drink</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Button */}
              <div className="flex gap-x-5 justify-center items-center">
                <Link href="/admin/modifyFood/">
                  <button
                    className="tablet:px-3 tablet:py-1
                    laptop:px-3 laptop:py-1
                    desktop:px-6 desktop:py-2
                    bg-[--incorrect-color] rounded
                    hover:bg-[--hover-incorrect-color] duration-300"
                  >
                    Cancel
                  </button>
                </Link>
                <button
                  className="tablet:px-3 tablet:py-1
                  laptop:px-3 laptop:py-1
                  desktop:px-5 desktop:py-2
                  bg-[--secondary-color] rounded
                  hover:bg-[--passed-color] duration-300"
                >
                  Confirm
                </button>
                <div>
                  <Link href="/admin/modifyFood/">
                    <button
                      className="px-5 py-1
                bg-[--incorrect-color] rounded
                hover:bg-[--hover-incorrect-color] duration-300"
                      onClick={this.deleteHandler.bind(this)}
                    >
                      Delete
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
