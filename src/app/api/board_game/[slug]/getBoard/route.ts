import database from "../../../../../../utils/Database/database";
import compare from "../../../../../../utils/Database/enumCompare";
import select from "../../../../../../utils/Database/state/select";
import { board_game } from "../../../../../../utils/typeStorage/tableDatabase";

export async function GET(req: Request, { params }: {params: {slug: number}}) {
    try {
        let data = await new database(new select<board_game>("board_game_id", 'name', 'picture', 'status').table('board_game').where('board_game_id', compare.EQUAL, params.slug)).query();
        return Response.json(data[0], {status: 201});
    } catch (error) {
        return Response.json({message: "Cannot find this board game"}, {status: 404});
    }
}