import database from "../../../../../../utils/Database/database";
import compare from "../../../../../../utils/Database/enumCompare";
import select from "../../../../../../utils/Database/state/select";
import { table_data } from "../../../../../../utils/typeStorage/tableDatabase";

export async function GET() {
    try{
        const result = await new database(new select<table_data>('table_id', 'table_name', 'table_description').table('table_data')).query();
        return Response.json(result, {status: 200});
    }catch(error){
        return Response.json({message: "Can't fetch data"}, {status: 401});
    }
}