import database from "../../../../../../utils/Database/database";
import compare from "../../../../../../utils/Database/enumCompare";
import update from "../../../../../../utils/Database/state/updateDB";
import { tableData } from "../../../../../../utils/typeStorage/tableType";
import { table_data } from "../../../../../../utils/typeStorage/tableDatabase";

export async function PATCH(req: Request){
    let table_id;
    let table_name;
    let table_description;

    let data: tableData = await req.json();
    table_id = data.table_id;
    table_name = data.table_name;
    table_description = data.table_description;

    let change = new update<table_data>();
    if(table_name) {change.change('table_name', table_name);}
    if(table_description) {change.change('table_description', table_description);}
    

    try {
        await new database(change.table('table_data').where('table_id', compare.EQUAL, table_id)).query();
        return Response.json({message: "changed data"}, {status: 201});
    } catch (error) {
        return Response.json({message: "Cannot change this table"}, {status: 404});
    }
}