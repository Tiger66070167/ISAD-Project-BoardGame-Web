import database from "../../../../../utils/Database/database";
import compare from "../../../../../utils/Database/enumCompare";
import deleteDB from "../../../../../utils/Database/state/deleteDB";
import { bookingData } from "../../../../../utils/typeStorage/bookingType";

export async function DELETE(req: Request) {
    let data: bookingData = await req.json();
    try{
        await new database(new deleteDB().table('booking').where('booking_id', compare.EQUAL, data.booking_id)).query();
        return Response.json({message: "deleted booking"}, {status: 201});
    }catch(error){
        return Response.json({message: "cannot deleted this booking"}, {status: 404});
    }
}