import database from "../../../../../../utils/Database/database";
import compare from "../../../../../../utils/Database/enumCompare";
import deleteDB from "../../../../../../utils/Database/state/deleteDB";
import { periodData } from "../../../../../../utils/typeStorage/periodType";

export async function DELETE(req: Request) {
    let data: periodData = await req.json();
    try{
        await new database(new deleteDB().table('booking_period').where('period_id', compare.EQUAL, data.period_id)).query();
        return Response.json({message: "deleted period"}, {status: 201});
    }catch(error){
        return Response.json({message: "cannot deleted this period"}, {status: 404});
    }
}