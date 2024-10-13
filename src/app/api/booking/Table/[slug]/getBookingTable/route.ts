import database from "../../../../../../../utils/Database/database";
import compare from "../../../../../../../utils/Database/enumCompare";
import select from "../../../../../../../utils/Database/state/select";
import { table_data } from "../../../../../../../utils/typeStorage/tableDatabase";

export async function GET(req:Request, {params}: {params: {slug: number}}) {
    try {
        let data = await new database(new select<table_data>("table_id", "table_name", "table_description").table("table_data").where("table_id", compare.EQUAL, params.slug)).query();
        return Response.json(data[0], {status: 201});
    } catch (error) {
        return Response.json({message: "Cannot find this table"}, {status: 404});
    }
    
}