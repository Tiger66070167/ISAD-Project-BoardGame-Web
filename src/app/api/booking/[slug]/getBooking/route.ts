import database from "../../../../../../utils/Database/database";
import compare from "../../../../../../utils/Database/enumCompare";
import select from "../../../../../../utils/Database/state/select";
import { booking } from "../../../../../../utils/typeStorage/tableDatabase";

export async function GET(req: Request, {params}: {params: {slug: number}}) {
    try{
        const data = await new database(new select<booking>('booking_id', 'user_id', 'table_id', 'period_id', 'date')
    .table('booking').where('user_id', compare.EQUAL, params.slug)).query();
    return Response.json(data[0], {status: 201});
    }catch(error){
        return Response.json({message: "cannot find this booking"}, {status: 404});
    }
}