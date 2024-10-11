import database from "../../../../../../utils/Database/database";
import compare from "../../../../../../utils/Database/enumCompare";
import deleteDB from "../../../../../../utils/Database/state/deleteDB";
import { tableData } from "../../../../../../utils/typeStorage/tableType";

export async function DELETE(req: Request) {
    let data: tableData = await req.json();
    try{
        await new database(new deleteDB().table('table_data').where('table_id', compare.EQUAL, data.table_id)).query();
        return Response.json({message: "deleted table"}, {status: 201});
    }catch(error){
        return Response.json({message: "cannot deleted this table"}, {status: 404});
    }
}