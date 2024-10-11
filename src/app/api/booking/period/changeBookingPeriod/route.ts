import database from "../../../../../../utils/Database/database";
import compare from "../../../../../../utils/Database/enumCompare";
import update from "../../../../../../utils/Database/state/updateDB";
import { periodData } from "../../../../../../utils/typeStorage/periodType";
import { booking_period } from "../../../../../../utils/typeStorage/tableDatabase";

export async function PATCH(req: Request){
    let period_id;
    let start;
    let end;

    let data: periodData = await req.json();
    period_id = data.period_id;
    start = data.start;
    end = data.end;

    let change = new update<booking_period>();
    change.change('start', start).change('end', end);

    try {
        await new database(change.table('booking_period').where('period_id', compare.EQUAL, period_id)).query();
        return Response.json({message: "changed data"}, {status: 201});
    } catch (error) {
        return Response.json({message: "Cannot change this period"}, {status: 404});
    }
}