"use client";

import React, { createContext } from "react";
import { bookingData } from "../../../../utils/typeStorage/bookingType";
import { periodData } from "../../../../utils/typeStorage/periodType";
import { tableData } from "../../../../utils/typeStorage/tableType";
import bookingFetcher from "../../../../utils/core/fetcher/tableFetcher/bookingFetcher";

interface BookingContextType {
  allBooking: Array<bookingData>;
  allPeriod: Array<periodData>;
  allTable: Array<tableData>;
}

interface BookingPageState {
  allBooking: Array<bookingData>;
  allPeriod: Array<periodData>;
  allTable: Array<tableData>;
  loading: boolean;
}

export const bookingContext = createContext<BookingContextType>({
  allBooking: [],
  allPeriod: [],
  allTable: [],
});

export default class BookingPage extends React.Component<{}, BookingPageState> {
  private bookingFetcher: bookingFetcher;

  constructor(props: {}) {
    super(props);

    this.state = {
      allBooking: [],
      allPeriod: [],
      allTable: [],
      loading: true,
    };

    this.bookingFetcher = new bookingFetcher();
  }

  private hasFetchedData: boolean = false;
  async componentDidMount() {
    if(!this.hasFetchedData) {
        this.hasFetchedData = true;
        await this.fetchBookingData();
    }
  }

  private async fetchBookingData() {
    try {
      const [bookings, periods, tables] = await Promise.all([
        this.bookingFetcher.getAllBooking(),
        this.bookingFetcher.getAllBookingPeriod(),
        this.bookingFetcher.getAllBookingTable(),
      ]);
      this.setState({
        allBooking: bookings,
        allPeriod: periods,
        allTable: tables,
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching booking data:", error);
      // Handle error appropriately here
    }
  }

  renderLoading() {
    return (
      <div className="text-white flex px-20 min-h-screen min-w-screen justify-center bg-[--neutrals-color] py-20">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-[--primary-color]"></div>
      </div>
    );
  }

  renderContent() {
    return (
      <div className="min-h-screen min-w-screen pt-[56px] bg-[--neutrals-color] flex flex-col items-center">
      </div>
    );
  }

  render() {
    return this.state.loading ? this.renderLoading() : this.renderContent();
  }
}
