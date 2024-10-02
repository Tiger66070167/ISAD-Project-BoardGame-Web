import React from 'react';

export default function DateCard(){
  const today = new Date();
  const days: string[] = ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'];

  const dateList = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() + index);
    return date;
  });

  return (
    <div className="flex flex-wrap justify-center p-4">
      {dateList.map((date, index) => {
        const isToday = date.toDateString() === today.toDateString();
        return (
          <div
            key={index}
            className={`m-2 w-24 h-24 rounded-lg shadow-lg text-center flex flex-col justify-center items-center 
              ${isToday ? 'bg-[--primary-color] text-black' : 'bg-[#292929] text-white'}`}
          >
            <div className="text-lg font-bold">{date.getDate()}</div>
            <div className="text-sm">{days[date.getDay()]}</div>
          </div>
        );
      })}
    </div>
  );
}
