"use client";

import React, { Component } from "react";

export default class bookingInfo extends Component {
  render() {
    return (
      <div className="flex justify-center items-center min-h-screen min-w-screen bg-[--neutrals-color]">
        <div className="flex flex-col items-center">
          <h1 className="text-[--primary-color] tablet:text-2xl laptop:text-3xl desktop:text-4xl font-black">Your Booking Info</h1>
          <div className="border rounded-md border-black w-96 text-black bg-[#303030] m-5 flex flex-col">
            <div className="text-white tablet:text-base laptop:text-xl desktop:text-2xl pl-10 pt-8">
              <p>Booking id : </p>
              <p>User : </p>
              <p>Table : </p>
              <p>Period : </p>
              <p>Date : </p>
            </div>
            <div className="flex items-center justify-between py-5 px-10">
              <button className="rounded-md w-32 h-10 bg-[--primary-color] text-white hover:bg-[--hover-primary-color] duration-200">
                Food
              </button>
              <button className="rounded-md w-32 h-10 bg-[--incorrect-color] text-white hover:bg-[--hover-incorrect-color] duration-200">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
