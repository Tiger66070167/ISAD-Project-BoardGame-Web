import database from "../../../../../../../utils/Database/database";
import compare from "../../../../../../../utils/Database/enumCompare";
import select from "../../../../../../../utils/Database/state/select";
import { food_menu } from "../../../../../../../utils/typeStorage/tableDatabase";

export async function GET(req: Request, { params }: {params : {slug : number}}) {
    try {
        const data = await new database(new select<food_menu>('food_id', 'name', 'type', 'description', 'price', 'picture').table('food_menu').where('food_id', compare.EQUAL, params.slug)).query();
        return Response.json(data[0], {status: 201});
    } catch (error) {
        return Response.json({message: "cannot find this food"}, {status: 404});
    }
}