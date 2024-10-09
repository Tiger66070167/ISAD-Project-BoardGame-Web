import pictureManager from "../../../../../utils/core/pictureManager/pictureManager";
import database from "../../../../../utils/Database/database";
import compare from "../../../../../utils/Database/enumCompare";
import deleteDB from "../../../../../utils/Database/state/deleteDB";
import select from "../../../../../utils/Database/state/select";
import { boardGame } from "../../../../../utils/typeStorage/boardType";
import { board_game } from "../../../../../utils/typeStorage/tableDatabase";

export async function DELETE(req: Request) {
    let data: boardGame = await req.json();
    try {
        let path = (await new database(new select<board_game>('picture').table('board_game').where('board_game_id', compare.EQUAL, data.board_game_id), 
                        new deleteDB().table('board_game').where('board_game_id', compare.EQUAL, data.board_game_id)).query())[0].picture;
        await pictureManager.deletePicture(path);
        return Response.json({message: "deleted board_game"}, {status: 201});
    } catch (error) {
        return Response.json({message: "cannot deleted this board game"}, {status: 404});
    }
}