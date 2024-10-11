import React from "react";

interface Prop {
    date: Date
}

export default function NewTimeTable({ date } : Prop){
    return (
        <div className="border w-full h-full m-5 max-w-6xl">
            <div className="border text-center">
                {date.toDateString()}
            </div>
            <div className="grid grid-cols-4 w-full">
                <h1 className="border">hello</h1>
            </div>
        </div>
    );
}