import pictureManager from "../../../../../utils/core/pictureManager/pictureManager";
import database from "../../../../../utils/Database/database";
import compare from "../../../../../utils/Database/enumCompare";
import update from "../../../../../utils/Database/state/updateDB";
import { boardGame } from "../../../../../utils/typeStorage/boardType";
import { board_game } from "../../../../../utils/typeStorage/tableDatabase";

export async function PATCH(req: Request) {
    let board_game_id;
    let name;
    let status;
    
    let data: boardGame = await req.json();
    board_game_id = data.board_game_id;
    name = data.name;
    status = data.status;
    
    let change = new update<board_game>();
    if (name) {change.change('name', name);}
    if (status != undefined) {change.change('status', status);}
    

    try {
        await new database(change.table('board_game').where('board_game_id', compare.EQUAL, board_game_id!)).query();
        return Response.json({message: "changed data"}, {status: 201});
    } catch (error) {
        return Response.json({message: "Cannot change this board game"}, {status: 404})
    }
}