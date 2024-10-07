import pictureManager from "../../../../../utils/core/pictureManager/pictureManager";
import database from "../../../../../utils/Database/database";
import insert from "../../../../../utils/Database/state/insertDB";

export async function POST(req: Request) {
    const data = await req.formData();

    let name: string = data.get("name") as string;
    let picture: File = data.get("picture") as File;

    let path: string;
    try {
        if (picture) {
            path= await pictureManager.savePicture(picture, "images/boardGamePicture/");
        } else {throw new Error("Cannot save this picture")}

        await new database(new insert('default', name, path, 1).table('board_game')).query();
        return Response.json({message: "added board game"}, {status: 201});
    } catch (error) {
        return Response.json({message: "fail to insert board game"}, {status: 400});
    }
}