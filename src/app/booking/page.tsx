"use client";

import React from "react";
import Calendar from './calendar';

export default class bookingPage extends React.Component {
  render() {
    return (
      <div className="min-h-screen min-w-screen bg-[--neutrals-color]">
        <Calendar/>
      </div>
    );
  }
}
