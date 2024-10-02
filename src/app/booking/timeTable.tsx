import React from "react";

class TimePeriod {
    private S_Hour: number;
    private S_Min: number;
    private E_Hour: number;
    private E_Min: number;
    constructor(S_Hour: number, S_Min: number, E_Hour: number, E_Min: number){
        this.S_Hour = S_Hour;
        this.S_Min = S_Min;
        this.E_Hour = E_Hour;
        this.E_Min =E_Min;
    }

    public getStartTime(): string {
        return `${this.S_Hour}:${this.S_Min.toString().padStart(2, '0')}`;
    }

    public getEndTime(): string {
        return `${this.E_Hour}:${this.E_Min.toString().padStart(2, '0')}`;
    }

    public getNext(): TimePeriod{
        let diffhour: number, diffmin: number;
        diffmin = (((this.S_Hour<this.E_Hour) ? this.E_Hour*60 : (this.E_Hour+24)*60) + this.E_Min) - (this.S_Hour*60 + this.S_Min);
        diffhour = Math.floor(diffmin/60);
        diffmin %= 60;
        return new TimePeriod(this.E_Hour, this.E_Min, (this.E_Hour+diffhour > 24) ? (this.E_Hour+diffhour)%24 : this.E_Hour+diffhour, this.E_Min+diffmin);
    }
}

export default function TimeTable(){

    let period = new TimePeriod(12, 0, 14, 0);
    let periods: TimePeriod[] = [period];
    for(let i = 1; i<4; i++){
        periods.push(periods[i-1].getNext());
    }

    return (
        <>
        <div className="flex items-center justify-center">
            <div className="flex flex-wrap justify-center">
            {periods.map(
                (each, index) => (<TimeCard key={index}p={each} />)
            )}
            </div>
        </div>
        </>
    );
}

type TimeCardProps = {
    p: TimePeriod;
};

function TimeCard({p}: TimeCardProps){
    return (
        <>
        <div className=" m-2 w-48 h-24 rounded-lg shadow-lg text-center flex flex-col justify-center items-center 
              bg-[#292929] text-white">
            <h1 className="text-xl">{`${p.getStartTime()} - ${p.getEndTime()}`}</h1>
        </div>
        </>
    );
}