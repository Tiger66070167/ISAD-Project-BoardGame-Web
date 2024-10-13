import React, { useState, useContext } from "react";
import { bookingContext } from "./page";
import NewTimeTable from "./newTimeTable";
import { periodData } from "../../../utils/typeStorage/periodType";
import { tableData } from "../../../utils/typeStorage/tableType";

export type periodWithTable = {
    period: periodData;
    tables: tableData[];
}

class CalendarUtils {
    static getCalendarPageDate(month: number, year: number): Date[] {
        const lastDateOfCurrentMonth = new Date(year, month + 1, 0);
        lastDateOfCurrentMonth.setHours(0, 0, 0, 0);
        
        const lastSundayOfPreviousMonth = new Date(year, month, 1);
        lastSundayOfPreviousMonth.setHours(0, 0, 0, 0);
        lastSundayOfPreviousMonth.setDate(0);

        while (lastSundayOfPreviousMonth.getDay() !== 0) {
            lastSundayOfPreviousMonth.setDate(lastSundayOfPreviousMonth.getDate() - 1);
        }

        const firstSundayOfNextMonth = new Date(year, month + 1, 1);
        while (firstSundayOfNextMonth.getDay() !== 6) {
            firstSundayOfNextMonth.setDate(firstSundayOfNextMonth.getDate() + 1);
        }

        const dateList: Date[] = [];
        if (lastDateOfCurrentMonth.getDay() === 0) {
            dateList.push(lastDateOfCurrentMonth);
        }

        let currentDate = lastSundayOfPreviousMonth;
        while (currentDate <= firstSundayOfNextMonth) {
            dateList.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
        }

        return dateList;
    }
}

export default function NewCalendar() {
    const monthTable = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];
    const dayTable = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const context = useContext(bookingContext);
    const [monthState, setMonthState] = useState(0);
    const [selectedDate, setSelectedDate] = useState<Date>();
    const [selectedDatePeriod, setSelectedDatePeriod] = useState<periodWithTable[]>();

    const currentMonthDates = CalendarUtils.getCalendarPageDate(now.getMonth(), now.getFullYear());
    const nextMonthDates = CalendarUtils.getCalendarPageDate(now.getMonth() + 1, now.getFullYear());
    const calendarList = [currentMonthDates, nextMonthDates];

    const handleDateSelection = (date: Date) => {
        const todayPeriodWithTable = context.allPeriod.map(period => ({
            period,
            tables: context.allTable,
        }));

        const todayBooking = context.allBooking.filter(
            eachBooking => date.toISOString() === eachBooking.date
        );

        todayBooking.forEach(eachBooking => {
            todayPeriodWithTable.forEach((periodWithTables, index) => {
                if (eachBooking.period_id === periodWithTables.period.period_id) {
                    periodWithTables.tables = periodWithTables.tables.filter(
                        table => table.table_id !== eachBooking.table_id
                    );
                }
            });
        });

        const availablePeriodWithTable = todayPeriodWithTable.filter(
            periodAndTable => periodAndTable.tables.length > 0
        );

        setSelectedDate(date);
        setSelectedDatePeriod(availablePeriodWithTable);
    };

    return (
        <>
            <div className=" m-5 w-full h-full max-w-6xl">
                <div className=" grid grid-cols-2 w-full h-10">
                    <button 
                        onClick={() => setMonthState(0)} 
                        className={`border border-black ${monthState === 0 ? "bg-[--primary-color] text-black" : "bg-[#303030]"}`}>
                        {monthTable[now.getMonth()]}
                    </button>
                    <button 
                        onClick={() => setMonthState(1)} 
                        className={`border border-black ${monthState === 1 ? "bg-[--primary-color] text-black" : "bg-[#303030]"}`}>
                        {monthTable[(now.getMonth() + 1) % 12]}
                    </button>
                </div>
                <div className="grid grid-cols-7 w-full">
                    {dayTable.map(day => (
                        <div key={day} className="border border-black text-center bg-[#444444] text-white">
                            {day}
                        </div>
                    ))}
                    {calendarList[monthState].map(date => {
                        const todayPeriodWithTable = context.allPeriod.map(period => ({
                            period,
                            tables: context.allTable,
                        }));

                        const todayBooking = context.allBooking.filter(
                            eachBooking => date.toISOString() === eachBooking.date
                        );

                        todayBooking.forEach(eachBooking => {
                            todayPeriodWithTable.forEach((periodWithTables, index) => {
                                if (eachBooking.period_id === periodWithTables.period.period_id) {
                                    periodWithTables.tables = periodWithTables.tables.filter(
                                        table => table.table_id !== eachBooking.table_id
                                    );
                                }
                            });
                        });

                        const availablePeriodWithTable = todayPeriodWithTable.filter(
                            periodAndTable => periodAndTable.tables.length > 0
                        );

                        const isToday = date.getTime() === now.getTime();
                        const isValid = date > now && date <= new Date(now.getFullYear(), now.getMonth() + 2, 0) && availablePeriodWithTable.length > 0;

                        return (
                            <div 
                                key={date.toLocaleDateString()} 
                                className={`border border-black h-24 ${!isValid ? "text-gray-500" : "bg-[--neutrals-color]"}`}>
                                <button 
                                    onClick={() => isValid && handleDateSelection(date)} 
                                    disabled={!isValid} 
                                    className={`size-full ${selectedDate?.getTime() === date.getTime() ? "bg-[--primary-color] text-black" : "bg-[--neutrals-color]"}`}>
                                    <div className={`pl-2 text-lg text-start size-full ${isToday ? "text-black bg-[--primary-color]" : ""}`}>
                                        {date.getDate()}<br />
                                        {isToday ? " TODAY" : ""}
                                        <br />
                                        {availablePeriodWithTable.length <= 0 ? "FULL" : ""}
                                    </div>
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
            <NewTimeTable date={selectedDate} periodWithTable={selectedDatePeriod} />
        </>
    );
}
