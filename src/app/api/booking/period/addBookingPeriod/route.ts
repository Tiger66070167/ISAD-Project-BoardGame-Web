import database from "../../../../../../utils/Database/database";
import insert from "../../../../../../utils/Database/state/insertDB";
import { periodData } from "../../../../../../utils/typeStorage/periodType";

export async function POST(req: Request) {
    const data: periodData = await req.json();
    try {
        await new database(new insert('default', data.start, data.end).table("booking_period")).query();
        return Response.json({message: "added period"}, {status: 201});
    }catch (error){
        return Response.json({message: "fail to insert period"}, {status: 400});
    }

}