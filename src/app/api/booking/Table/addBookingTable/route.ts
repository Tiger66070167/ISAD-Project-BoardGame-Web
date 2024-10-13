import pictureManager from "../../../../../../utils/core/pictureManager/pictureManager";
import database from "../../../../../../utils/Database/database";
import insert from "../../../../../../utils/Database/state/insertDB";
import { tableData } from "../../../../../../utils/typeStorage/tableType";

export async function POST(req: Request) {
    const data = await req.formData();

    let table_name: string = data.get("table_name") as string;
    let table_description: string = data.get("table_description") as string;
    let picture: File = data.get("picture") as File;

    let path: string;
    try {
        if(picture){
            path = await pictureManager.savePicture(picture, "image/tablePicture/");
        }else {throw new Error("Cannot save this picture")}

        await new database(new insert('default', table_name, table_description, path).table("table_data")).query();
        return Response.json({message: "added table"}, {status: 201});
    }catch (error){
        return Response.json({message: "fail to insert table"}, {status: 400});
    }

}