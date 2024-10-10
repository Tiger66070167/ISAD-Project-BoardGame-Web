import React from "react";

interface Prop {
    date: Date
}

export default function NewTimeTable({ date } : Prop){
    return (
        <div>
            {date.toDateString()}
        </div>
    );
}