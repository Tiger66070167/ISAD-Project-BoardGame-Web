import pictureManager from "../../../../../../utils/core/pictureManager/pictureManager";
import database from "../../../../../../utils/Database/database";
import compare from "../../../../../../utils/Database/enumCompare";
import select from "../../../../../../utils/Database/state/select";
import update from "../../../../../../utils/Database/state/updateDB";
import { table_data } from "../../../../../../utils/typeStorage/tableDatabase";

export async function PATCH(req: Request) {
    let data = await req.formData();

    let table_id: number = parseInt(data.get("table_id") as string);
    let table_name: string = data.get("table_name") as string;
    let table_description: string = data.get("table_description") as string;
    let picture: File = data.get("picture") as File;

    const change: update<table_data> = new update();
    if (table_name) change.change('table_name', table_name);

    let path: string;
    if (picture) {
        path = await pictureManager.savePicture(picture, "/images/tablePicture");
    }

    try {
        if (picture) {
            let oldPath: string = (await new database(
                new select<table_data>('table_pic').table('table_data').where('table_id', compare.EQUAL, table_id),
                change.table('table_data').where('table_id', compare.EQUAL, table_id)
            ).query())[0].picture;
            await pictureManager.deletePicture(oldPath);
        } else {
            await new database(change.table('table_data').where('table_id', compare.EQUAL, table_id)).query();
        }
        return Response.json({message: "Update success"}, {status: 201});
    } catch (error) {
        return Response.json({message: "cannot update this table"}, {status: 404});
    }
}