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
