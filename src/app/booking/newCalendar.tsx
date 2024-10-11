import React, {useState, useContext} from "react";
import { bookingContext } from "./page";
import NewTimeTable from "./newTimeTable";
import { periodData } from "../../../utils/typeStorage/periodType";
import { tableData } from "../../../utils/typeStorage/tableType";

export type periodWithTable = {
    period: periodData;
    tables: tableData[];
}

function getCalendarPageDate(month: number, year: number): Date[]{
    const lastDateOfCurrentMonth = new Date(year, month+1, 0);
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
    const dateList = [];

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



export default function NewCalendar(){
    const monthTable = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayTable = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let now =  new Date();
    now.setHours(0, 0, 0, 0);
    const context = useContext(bookingContext);
    const [monthState, setMonthState] = useState(0);
    const [selectedDate, setSelectedDate] = useState<Date>();
    

    let currentMonthDates = getCalendarPageDate(now.getMonth(), now.getFullYear());
    let nextMonthDates = getCalendarPageDate(now.getMonth()+1, now.getFullYear());

    const calendarList = [currentMonthDates, nextMonthDates];
    const [selectedDatePeriod, setSelectedDatePeriod] = useState<periodWithTable[]>();
    return (
        <>
        <div className="border m-5 w-full h-full max-w-6xl">
            <div className="grid grid-cols-2 w-full h-10">
                <button onClick={() => setMonthState(0)} className={`border ${(monthState === 0) ? "bg-[--primary-color]" : "bg-[--neutrals-color]"}`}>{monthTable[now.getMonth()]}</button>
                <button onClick={() => setMonthState(1)} className={`border ${(monthState === 1) ? "bg-[--primary-color]" : "bg-[--neutrals-color]"}`}>{monthTable[(now.getMonth()+1)%12]}</button>
            </div>
            <div className="grid grid-cols-7 w-full">
                {dayTable.map((day) => {
                    return (
                        <div key={day} className="border text-center bg-white text-black">
                            {day}
                        </div>
                    );
                })}

                {calendarList[monthState].map((date) => {
                    // create list of period and tables
                    let todayPeriodWithTable : periodWithTable[] = context.allPeriod.map((eachP) => (
                        {
                            period: eachP,
                            tables: context.allTable
                        }
                    ));
                    // filter for only booking today(date)
                    let todayBooking = context.allBooking.filter((eachBooking) => (date.toISOString() === eachBooking.date));
                    // check foreach todaybooking and filter out table in each period that is occur in todaybooking
                    todayBooking.forEach((eachBooking) => {
                        todayPeriodWithTable.forEach((periodWithTables, index, arr) => {

                            let booking_period_id = eachBooking.period_id;
                            let this_period_id = periodWithTables.period.period_id;

                            if(booking_period_id === this_period_id && periodWithTables.tables.length>0){
                                arr[index].tables = periodWithTables.tables.filter((table) => 
                                    (table.table_id!=eachBooking.table_id));// left only table that not mention in this booking
                            }
                        })
                    });

                    let availablePeriodWithTable = todayPeriodWithTable.filter((periodAndTable) => (periodAndTable.tables.length>0));// periodWithTable that had atleast 1 table left
                    let isToday = (date.getTime() === now.getTime());
                    let isValid = (date>now && date<=new Date(now.getFullYear(), now.getMonth()+2, 0) && availablePeriodWithTable.length>0);

                    return (
                    <div 
                    key={date.toLocaleDateString()} 
                    className={`border h-24 ${!isValid ? "text-gray-500": "bg-[--neutrals-color]"}`}>

                        <button 
                        onClick={() => {setSelectedDate(date); setSelectedDatePeriod(availablePeriodWithTable);}} 
                        disabled={isValid ? false : true} 
                        className={`size-full ${(selectedDate && selectedDate.getTime() === date.getTime())? "bg-[--primary-color]" : "bg-[--neutrals-color]"}`}>

                            <div 
                            className={"text-lg text-start size-full "+(isToday ? "text-black bg-white": "")}>
                                {date.getDate()}<br></br>
                                {isToday ? " TODAY": ""}
                                <br />
                                {availablePeriodWithTable.length<=0? "FULL": ""}
                            </div>
                        </button>
                    </div>
                    );
                })}
            </div>
        </div>
        <NewTimeTable date={selectedDate} periodWithTable={selectedDatePeriod}/>
        </>
    );
}