<<<<<<< HEAD
"use client";

import React, {createContext} from "react";
import NewCalendar from "./newCalendar";
import { bookingData } from "../../../utils/typeStorage/bookingType";
import { periodData } from "../../../utils/typeStorage/periodType";
import { tableData } from "../../../utils/typeStorage/tableType";
import bookingFetcher from "../../../utils/core/fetcher/tableFetcher/bookingFetcher";

interface BookingContextType {
  allBooking: Array<bookingData>;
  allPeriod: Array<periodData>;
  allTable: Array<tableData>;
}

interface BookingPageState {
  allBooking: Array<bookingData>
  allPeriod: Array<periodData>
  allTable: Array<tableData>
  loading: boolean;
}

export const bookingContext = createContext<BookingContextType>({allBooking: [], allPeriod: [], allTable: []});

export default class bookingPage extends React.Component<{}, BookingPageState> {

  constructor(props: {}){
    super(props);

    this.state = {
      allBooking: [],
      allPeriod: [],
      allTable: [],
      loading: true
    }
  }

  setAllBooking(value: Array<bookingData>){
    this.setState({allBooking: value});
  }
  setAllPeriod(value: Array<periodData>){
    this.setState({allPeriod: value});
  }
  setAllTable(value: Array<tableData>){
    this.setState({allTable: value});
  }

  async componentDidMount() {
    let bookf = new bookingFetcher();
    this.setAllBooking(await bookf.getAllBooking());
    this.setAllPeriod(await bookf.getAllBookingPeriod());
    this.setAllTable(await bookf.getAllBookingTable());
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (<div className="text-white flex px-20 min-h-screen min-w-screen justify-center bg-[--neutrals-color] py-20">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-[--primary-color]"></div>
    </div>);
    }
    return (
        <div className="min-h-screen min-w-screen pt-[56px] bg-[--neutrals-color] flex flex-col items-center">
          <bookingContext.Provider value={{allBooking: this.state.allBooking, allPeriod: this.state.allPeriod, allTable: this.state.allTable}}>
            <NewCalendar />
          </bookingContext.Provider>
        </div>  
    );
  }
}
=======
"use client";

import React from "react";
import Calendar from './calendar';
import TimeTable from "./timeTable";
import Table from "./table";

import NewCalendar from "./newCalendar";

export default class bookingPage extends React.Component {
  render() {
    return (
        <div className="min-h-screen min-w-screen mt-[56px] bg-[--neutrals-color] flex flex-col items-center">
            <NewCalendar />
        </div>  
    );
  }
}
>>>>>>> 94017b906a6d929025bda466ec23f5487371b159
