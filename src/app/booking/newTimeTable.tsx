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

    if (!date || !periodWithTable) {
        return (
            <div className="border border-black bg-[#303030] w-full h-full m-5 max-w-6xl text-center rounded-md">
                <div className="w-full text-3xl">Please select a date</div>
            </div>
        );
    }

    return (
        <>
            <div className="border border-black w-full h-full m-5 max-w-6xl">
                <div className="border border-black text-center bg-[#303030] text-white">
                    {date.toDateString()}
                    <br />
                </div>
                <div className="grid grid-cols-4 w-full">
                    {periodWithTable.map((pwt) => (
                        <PeriodButton 
                            key={pwt.period.period_id}
                            period={pwt.period}
                            isSelected={selectedPeriod?.period.period_id === pwt.period.period_id}
                            onSelect={() => setSelectedPeriod(pwt)}
                        />
                    ))}
                </div>
            </div>
            <NewTable tableList={selectedPeriod?.tables} period={selectedPeriod?.period} date={date} />
        </>
    );
}

interface PeriodButtonProps {
    period: periodData;
    isSelected: boolean;
    onSelect: () => void;
}

const PeriodButton: React.FC<PeriodButtonProps> = ({ period, isSelected, onSelect }) => {
    return (
        <button
            onClick={onSelect}
            className={`border border-black text-center h-10 ${isSelected ? 'bg-[--primary-color] text-black' : ''}`}
        >
            {period.start+''} - {period.end+''}
        </button>
    );
};
