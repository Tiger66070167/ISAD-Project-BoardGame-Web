"use client";

import React, { createContext } from "react";
import NewCalendar from "./newCalendar";
import { bookingData } from "../../../utils/typeStorage/bookingType";
import { periodData } from "../../../utils/typeStorage/periodType";
import { tableData } from "../../../utils/typeStorage/tableType";
import bookingFetcher from "../../../utils/core/fetcher/tableFetcher/bookingFetcher";
import accountFetcher from "../../../utils/core/fetcher/tableFetcher/accountFetcher";
import { accountData, userInfo } from "../../../utils/typeStorage/accountType";
import BookingInfo from "./bookingInfo";

interface BookingContextType {
  allBooking: Array<bookingData>;
  allPeriod: Array<periodData>;
  allTable: Array<tableData>;
}

interface BookingPageState {
  user: accountData | null;
  book: bookingData | null;
  table: tableData | null;
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
  private account: accountFetcher;

  constructor(props: {}) {
    super(props);

    this.state = {
      user: null,
      book: null,
      table: null,
      allBooking: [],
      allPeriod: [],
      allTable: [],
      loading: true,
    };

    this.bookingFetcher = new bookingFetcher();
    this.account = new accountFetcher();
  }

  private hasFetchedData: boolean = false;
  async componentDidMount() {
    if (!this.hasFetchedData) {
      this.hasFetchedData = true;
      await this.fetchBookingData();
    }

    if (this.state.user && this.state.user.booked) {
      await this.validation();
    } else {
      this.setState({loading: false})
    }
  }

  private async fetchBookingData() {
    try {
      let user: userInfo | null = await this.account.checkToken();
      if (user) {
        this.setState({ user: await this.account.getAccount(user.user_id) });
      }

      const [bookings, periods, tables] = await Promise.all([
        this.bookingFetcher.getAllBooking(),
        this.bookingFetcher.getAllBookingPeriod(),
        this.bookingFetcher.getAllBookingTable(),
      ]);
      this.setState({
        allBooking: bookings,
        allPeriod: periods,
        allTable: tables
      });
    } catch (error) {
      console.error("Error fetching booking data:", error);
      // Handle error appropriately here
    }
  }

  private getPeriod(type: number): periodData {
    if (type === 1) {
      return { period_id: 1, start: new Date("2024-10-14T12:00:00"), end: new Date("2024-10-14T14:00:00") }
    } else if (type === 2) {
      return { period_id: 1, start: new Date("2024-10-14T14:00:00"), end: new Date("2024-10-14T16:00:00") }
    } else if (type === 3) {
      return { period_id: 1, start: new Date("2024-10-14T16:00:00"), end: new Date("2024-10-14T18:00:00") }
    } else if (type === 4) {
      return { period_id: 1, start: new Date("2024-10-14T18:00:00"), end: new Date("2024-10-14T20:00:00") }
    } else {
      return { period_id: 1, start: new Date("2024-10-14T20:00:00"), end: new Date("2024-10-14T22:00:00") }
    }
  }

  private async validation() {
    let bookData: bookingData = (await this.bookingFetcher.getBooking(this.state.user!.users_id))!;
    console.log(bookData);
    if (new Date().getTime > this.getPeriod(bookData.period_id).end.getTime) {
      await this.bookingFetcher.deleteBooking(bookData.booking_id);
      await this.account.updateAccount(this.state.user!.users_id, undefined, undefined, undefined, undefined, undefined, undefined, false);

      window.location.reload();
    } else {
      let table: tableData = (await this.bookingFetcher.getBookingTable(bookData.table_id))!;
      this.setState({ book: bookData, table: table, loading: false });
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
        <bookingContext.Provider value={{ allBooking: this.state.allBooking, allPeriod: this.state.allPeriod, allTable: this.state.allTable }}>
          <NewCalendar />
        </bookingContext.Provider>
      </div>
    );
  }

  render() {
    return this.state.loading ? this.renderLoading() : this.state.user?.booked ? <BookingInfo table={this.state.table!} user={this.state.user!} book={this.state.book!} getPeriod={this.getPeriod.bind(this)} /> : this.renderContent();
  }
}
