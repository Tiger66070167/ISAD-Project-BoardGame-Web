"use client";

import React, { Component } from "react";
import { tableData } from "../../../utils/typeStorage/tableType";
import { accountData } from "../../../utils/typeStorage/accountType";
import { bookingData } from "../../../utils/typeStorage/bookingType";
import accountFetcher from "../../../utils/core/fetcher/tableFetcher/accountFetcher";
import bookingFetcher from "../../../utils/core/fetcher/tableFetcher/bookingFetcher";
import Link from "next/link";

export default class BookingInfo extends Component<{ table: tableData, user: accountData, book: bookingData, getPeriod: Function }> {
  async handleCancel() {
    let account = new accountFetcher();
    let book = new bookingFetcher();

    await account.updateAccount(this.props.user.users_id, undefined, undefined, undefined, undefined, undefined, undefined, false);
    await book.deleteBooking(this.props.book.booking_id);

    window.location.reload();
  }

  render() {
    return (
      <div className="flex justify-center items-center min-h-screen min-w-screen bg-[--neutrals-color]">
        <div className="flex flex-col items-center">
          <h1 className="text-[--primary-color] tablet:text-2xl laptop:text-3xl desktop:text-4xl font-black">Your Booking Info</h1>
          <div className="border rounded-md border-black w-96 text-black bg-[#303030] m-5 flex flex-col">
            <div className="text-white tablet:text-base laptop:text-xl desktop:text-2xl pl-10 pt-8">
              <p>Table name : {this.props.table.table_name}</p>
              <p>User : {this.props.user.username}</p>
              <p>Period : {`${this.props.getPeriod(this.props.book.period_id).start.toTimeString().slice(0, 8)} - ${this.props.getPeriod(this.props.book.period_id).end.toTimeString().slice(0, 8)}`}</p>
              <p>Date : {this.props.book.date.split("T")[0]}</p>
            </div>
            <div className="flex items-center justify-between py-5 px-10">
              <Link href={`/food/${this.props.table.table_id}`}>
                <button className="rounded-md w-32 h-10 bg-[--primary-color] text-white hover:bg-[--hover-primary-color] duration-200">
                  Food
                </button>
              </Link>
              <button onClick={this.handleCancel.bind(this)} className="rounded-md w-32 h-10 bg-[--incorrect-color] text-white hover:bg-[--hover-incorrect-color] duration-200">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
