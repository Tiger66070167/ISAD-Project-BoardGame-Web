import React, {useState} from "react";
import NewTimeTable from "./newTimeTable";

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
        const [monthState, setMonthState] = useState(0);
        const [selectedDate, setSelectedDate] = useState(new Date());

        let currentMonthDates = getCalendarPageDate(now.getMonth(), now.getFullYear());
        let nextMonthDates = getCalendarPageDate(now.getMonth()+1, now.getFullYear());

        const calendarList = [currentMonthDates, nextMonthDates];
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
                        let isToday = (date.toDateString() == now.toDateString());
                        let isValid = (date>now && date<=new Date(now.getFullYear(), now.getMonth()+2, 0));
                        return (
                        <div key={date.toLocaleDateString()} className={`border h-24 ${!isValid ? "text-gray-500": "bg-[--neutrals-color]"}`}>
                            <button onClick={() => setSelectedDate(date)} 
                            disabled={isValid ? false : true} 
                            className={`size-full ${(date.getTime() === selectedDate.getTime()) ? "bg-[--primary-color]" : "bg-[--neutrals-color]"}`}>
                                <div className={"text-lg text-start size-full "+(isToday ? "text-black bg-white": "")}>
                                {date.getDate()}<br></br>
                                {isToday ? " TODAY": ""}
                                </div>
                            </button>
                        </div>
                        );
                    })}
                </div>
            </div>
            <NewTimeTable date={selectedDate}/>
            </>
        );
}