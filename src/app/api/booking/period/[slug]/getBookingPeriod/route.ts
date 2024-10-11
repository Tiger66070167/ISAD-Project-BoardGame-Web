import database from "../../../../../../../utils/Database/database";
import compare from "../../../../../../../utils/Database/enumCompare";
import select from "../../../../../../../utils/Database/state/select";
import { booking_period } from "../../../../../../../utils/typeStorage/tableDatabase";

export async function GET(req:Request, {params}: {params: {slug: number}}) {
    try {
        let data = await new database(new select<booking_period>("period_id", "start", "end").table("booking_period").where("period_id", compare.EQUAL, params.slug)).query();
        return Response.json(data[0], {status: 201});
    } catch (error) {
        return Response.json({message: "Cannot find this period"}, {status: 404});
    }
    
}