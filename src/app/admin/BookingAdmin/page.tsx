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
    let isProcessing = false;
    const handleDelete = async (id:number) => {
      isProcessing = true;
      await new bookingFetcher().deleteBooking(id);
      window.location.reload()
    }
    return (
      <div className="min-h-screen min-w-screen pt-24 bg-[--neutrals-color] flex flex-col items-center">
        <h1 className="text-[--primary-color] tablet:text-2xl laptop:text-3xl desktop:text-4xl font-black">
          Customer Booking Info
        </h1>
        {
            this.state.allBooking.map(
                (b) => {
                    return (
                        <div key={b.booking_id} className="border rounded-md border-black w-9/12 text-black bg-[#303030] m-5 flex justify-between">
                          <div className="text-white tablet:text-base laptop:text-xl desktop:text-2xl pl-10 py-5">
                            <p>Booking id : {b.booking_id.toString()}</p>
                            <p>User : {b.user_id}</p>
                            <p>Table : {b.table_id}</p>
                            <p>Period : {b.period_id}</p>
                            <p>Date : {b.date.split("T")[0]}</p>
                          </div>
                          <div className="flex justify-center py-10 pr-10">
                            <button className="rounded-md w-32 bg-[--secondary-color] hover:bg-[--passed-color] duration-200"
                              onClick={() => handleDelete(b.booking_id)}
                              disabled={isProcessing!}
                            >
                              Complete
                            </button>
                          </div>
                        </div>
                    );
                }
            )
        }
      </div>
    );
  }

  render() {
    return this.state.loading ? this.renderLoading() : this.renderContent();
  }
}
