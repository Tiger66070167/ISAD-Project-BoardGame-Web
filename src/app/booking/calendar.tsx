import React from 'react';

const Calendar: React.FC = () => {
  const today = new Date();
  const days: string[] = ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'];

  // สร้างอาเรย์ของวันที่
  const dateList = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() + index);
    return date;
  });

  return (
    <div className="flex flex-wrap justify-center p-4">
      {dateList.map((date, index) => {
        // เช็คว่าการ์ดนี้เป็นวันนี้หรือไม่
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
};

const CenteredCalendar: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[--neutrals-color]">
      <Calendar />
    </div>
  );
};

export default CenteredCalendar;
