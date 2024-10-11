import database from "../../../../../../utils/Database/database";
import insert from "../../../../../../utils/Database/state/insertDB";
import { tableData } from "../../../../../../utils/typeStorage/tableType";

export async function POST(req: Request) {
    const data: tableData = await req.json();
    try {
        await new database(new insert('default', data.table_name, data.table_description).table("table_data")).query();
        return Response.json({message: "added table"}, {status: 201});
    }catch (error){
        return Response.json({message: "fail to insert table"}, {status: 400});
    }

}