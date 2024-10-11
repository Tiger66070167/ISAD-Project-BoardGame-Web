import React, { useState, useEffect } from "react";
import { periodData } from "../../../utils/typeStorage/periodType";
import { periodWithTable } from "./newCalendar";
import NewTable from "./newTable";
import { tableData } from "../../../utils/typeStorage/tableType";

interface Prop {
    date?: Date;
    periodWithTable?: periodWithTable[];
}

export default function NewTimeTable({ date, periodWithTable }: Prop) {
    const [selectedPeriod, setSelectedPeriod] = useState<periodWithTable | undefined>();

    // Reset selectedPeriod when date changes
    useEffect(() => {
        setSelectedPeriod(undefined);
    }, [date]);

    if (date !== undefined && periodWithTable !== undefined)
        return (
            <>
                <div className="border w-full h-full m-5 max-w-6xl ">
                    <div className="border text-center bg-white text-black">
                        {date.toDateString()}
                        <br />
                    </div>
                    <div className="grid grid-cols-4 w-full">
                        {periodWithTable.map((pwt) => {
                            const isSelected = selectedPeriod?.period.period_id === pwt.period.period_id;
                            return (
                                <button
                                    key={pwt.period.period_id + "" + date.toDateString()}
                                    onClick={() => setSelectedPeriod(pwt)}
                                    className={`border text-center h-10 ${isSelected ? 'bg-[--primary-color] text-white' : ''}`}
                                >
                                    {pwt.period.start} - {pwt.period.end}
                                </button>
                            );
                        })}
                    </div>
                </div>
                <NewTable tableList={selectedPeriod?.tables} />
            </>
        );
    else return (
        <div className="border w-full h-full m-5 max-w-6xl text-center">
            <div className="text-3xl">
                Please select date
            </div>
        </div>
    );
}
