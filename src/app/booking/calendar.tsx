import React from 'react';

export default function DateCard(){
  const today = new Date();
  const days: string[] = ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'];

  const dateList = Array.from({ length: 14 }, (_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() + index);
    return date;
  });

  return (
    <div className="flex flex-wrap justify-center p-4 max-w-4xl">
      {
        dateList.map((date, index) => {
          const isToday = date.toDateString() === today.toDateString();
          return (
            <div
              key={index}
              className={`m-2 w-24 h-24 rounded-lg shadow-lg text-center flex flex-col justify-center items-center bg-[--primary-color] text-black
                ${isToday ? ' border-3' : ''}`}>
              <div className="text-lg font-bold">{date.getDate()}</div>
              <div className="text-sm">{days[date.getDay()]}</div>
            </div>
          );
        })
      }
    </div>
  );
}
