import React from "react";
import { periodData } from "../../../utils/typeStorage/periodType";
import { periodWithTable } from "./newCalendar";

interface Prop {
    date: Date;
    periodWithTable: periodWithTable[];
}

export default function NewTimeTable({date, periodWithTable}: Prop){
    return (
        <div className="border w-full h-full m-5 max-w-6xl">
            <div className="border text-center">
                {date.toDateString()}
                <br />
            </div>
            <div className="grid grid-cols-4 w-full">
                <h1 className="border">hello</h1>
            </div>
        </div>
    );
}