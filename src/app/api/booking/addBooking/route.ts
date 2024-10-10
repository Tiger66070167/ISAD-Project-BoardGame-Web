import database from "../../../../../utils/Database/database";
import insert from "../../../../../utils/Database/state/insertDB";
import { bookingData } from "../../../../../utils/typeStorage/bookingType";

export async function POST(req: Request) {
    const data: bookingData = await req.json();
    try {
        await new database(new insert('default', data.user_id, data.table_id, data.period_id, data.date).table("booking")).query();
        return Response.json({message: "added booking"}, {status: 201});
    }catch (error){
        return Response.json({message: "fail to insert booking"}, {status: 400});
    }

}