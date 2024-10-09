"use client";

import React from "react";
import Calendar from './calendar';
import TimeTable from "./timeTable";
import Table from "./table";

export default class bookingPage extends React.Component {
  render() {
    return (
    <div className="min-h-screen min-w-screen bg-[--neutrals-color] flex flex-col justify-between">
      <div className="flex flex-col items-center flex-grow mt-20">
        <div className="rounded-xl bg-[--background] m-3">
        <Calendar />
        </div>
        <div className="rounded-xl bg-[--background] m-3">
        <TimeTable />
        </div>
        <div className="rounded-xl bg-[--background] m-3">
        <Table/>
        </div>
      </div>
    </div>
      
    );
  }
}
