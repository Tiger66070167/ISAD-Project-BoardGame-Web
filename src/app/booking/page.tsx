"use client";

import React from "react";
import Calendar from './calendar';
import TimeTable from "./timeTable";

export default class bookingPage extends React.Component {
  render() {
    return (
          <div className="min-h-screen min-w-screen bg-[--neutrals-color] flex flex-col justify-between mt-11">
          <div className="flex flex-col items-center flex-grow">
            <Calendar />
            <TimeTable />
          </div>
        </div>
      
    );
  }
}
