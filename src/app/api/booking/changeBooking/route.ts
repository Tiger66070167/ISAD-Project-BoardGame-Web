import update from "../../../../../utils/Database/state/updateDB";
import { bookingData } from "../../../../../utils/typeStorage/bookingType";
import { booking } from "../../../../../utils/typeStorage/tableDatabase";
import database from "../../../../../utils/Database/database";
import compare from "../../../../../utils/Database/enumCompare";

export async function PATCH(req: Request) {
    let booking_id;
    let user_id;
    let table_id;
    let period_id;
    let date;

    let data: bookingData = await req.json();
    booking_id = data.booking_id;
    user_id = data.user_id;
    table_id = data.table_id;
    period_id = data.period_id;
    date = data.date;
    
    let change = new update<booking>();
    change.change('user_id', user_id).change('table_id', table_id).change('period_id', period_id).change('date', date);

    try {
        await new database(change.table('booking').where('booking_id', compare.EQUAL, booking_id)).query();
        return Response.json({message: "changed data"}, {status: 201});
    }catch (error){
        return Response.json({message: "Cannot change this booking"}, {status: 404});
    }

}