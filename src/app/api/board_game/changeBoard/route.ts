import pictureManager from "../../../../../utils/core/pictureManager/pictureManager";
import database from "../../../../../utils/Database/database";
import compare from "../../../../../utils/Database/enumCompare";
import update from "../../../../../utils/Database/state/updateDB";
import { boardGame } from "../../../../../utils/typeStorage/boardType";
import { board_game } from "../../../../../utils/typeStorage/tableDatabase";


// ! This is not functional yet, please stay away from this, this is absolute mess right now, don't touch this don't use this 
export async function PATCH(req: Request) {
    let type = req.headers.get('content-type');

    let board_game_id;
    let name;
    let picture;
    let status;
    
    if (type === "application/formData") {
        let data: FormData = await req.formData();
        board_game_id = parseInt(data.get("board_game_id") as string);
        name = data.get("name") as string;
        picture = data.get("picture") as File;
        status  = ((data.get("status") as string).toLowerCase() === "true");
    } else if (type === "application/json") {
        let data: boardGame = await req.json();
        board_game_id = data.board_game_id;
        name = data.name;
        status = data.status;
    }

    console.log(board_game_id, name, picture, status);
    
    let change = new update<board_game>();
    if (name) {change.change('name', name);}
    if (status != undefined) {change.change('status', status);}
    if (picture) {
        let path: string = await pictureManager.savePicture(picture, "public/images/boardGamePicture");
        change.change('picture', path);
    }

    try {
        await new database(change.table('board_game').where('board_game_id', compare.EQUAL, board_game_id!)).query();
        return Response.json({message: "changed data"}, {status: 201});
    } catch (error) {
        return Response.json({message: "Cannot change this board game"}, {status: 404})
    }
}