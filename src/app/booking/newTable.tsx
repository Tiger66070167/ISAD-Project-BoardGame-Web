import React from "react";
import { tableData } from "../../../utils/typeStorage/tableType";

interface Prop {
    tableList?: tableData[]
}

export default function NewTable({tableList}: Prop){

    if(tableList!=undefined)
    return (
        <div className="border w-full h-full m-5 max-w-6xl">
            <div className="border text-center bg-white text-black">
                Select your table
            </div>
            <div className="border grid grid-cols-1 w-full max-h-96 overflow-y-auto">
                {tableList.map((table) => {
                    return (
                        <button key={table.table_id} className="border flex flex-col min-h-44 m-3">
                            <img src={(table.table_pic) ? table.table_pic : "https://www.glitz.co.th/wp-content/uploads/2022/06/hercules-series-9-x-40-antique-rustic-solid-pine-folding-farm-table-xa-f-108x40-gg-2_lighter.jpg"} alt="Table picture" width="250px"/>
                            <div className="border text-start text-4xl">
                                {table.table_name}
                            </div>
                            <div className="border text-start">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, iusto assumenda! Reprehenderit, nam quo eos inventore in, omnis velit est error amet dolore, tempore dolorum exercitationem consectetur aut earum itaque.
                                {table.table_description}
                            </div>
                        </button>
                    );
                    })}
            </div>
        </div>
    );
    else return (
        <div className="border w-full h-full m-5 max-w-6xl text-center">
            <div className=" text-3xl">
                Plese select your time period
            </div>
        </div>
    );
}