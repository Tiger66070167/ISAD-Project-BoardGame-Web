import pictureManager from "../../../../../utils/core/pictureManager/pictureManager";
import database from "../../../../../utils/Database/database";
import compare from "../../../../../utils/Database/enumCompare";
import select from "../../../../../utils/Database/state/select";
import update from "../../../../../utils/Database/state/updateDB";
import { board_game } from "../../../../../utils/typeStorage/tableDatabase";

export async function PATCH(req: Request) {
    let data = await req.formData();

    let board_game_id: number = parseInt(data.get("board_game_id") as string);
    let name: string = data.get("name") as string;
    let picture: File = data.get("picture") as File;

    const change: update<board_game> = new update();
    if (name) change.change('name', name);

    let path: string;
    if (picture) {
        path = await pictureManager.savePicture(picture, "/images/boardGamePicture");
        change.change('picture', path);
    }

    try {
        if (picture) {
            let oldPath: string = (await new database(
                new select<board_game>('picture').table('board_game').where('board_game_id', compare.EQUAL, board_game_id),
                change.table('board_game').where('board_game_id', compare.EQUAL, board_game_id)
            ).query())[0].picture;
            await pictureManager.deletePicture(oldPath);
        } else {
            await new database(change.table('board_game').where('board_game_id', compare.EQUAL, board_game_id)).query();
        }
        return Response.json({message: "Update success"}, {status: 201});
    } catch (error) {
        return Response.json({message: "cannot update this board game"}, {status: 404});
    }
}