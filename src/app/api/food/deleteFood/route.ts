import database from "../../../../../utils/Database/database";
import compare from "../../../../../utils/Database/enumCompare";
import deleteDB from "../../../../../utils/Database/state/deleteDB";
import { foodMenu } from "../../../../../utils/typeStorage/foodType";

export async function DELETE(req: Request) {
    let data: foodMenu = await req.json();
    try {
        await new database(new deleteDB().table('food_menu').where('food_id', compare.EQUAL, data.food_id!)).query();
        return Response.json({message: "Deleted"}, {status: 204});
    } catch (error) {
        return Response.json({message: "Cannot delete this food"}, {status: 400});
    }
}