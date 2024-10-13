import database from "../../../../../../utils/Database/database";
import insert from "../../../../../../utils/Database/state/insertDB";
import { foodOrder } from "../../../../../../utils/typeStorage/foodType";

export async function POST(req: Request) {
    const data: foodOrder = await req.json();
    try {
        await new database(new insert('default', data.table_id, data.food_id, 'pending', data.amount).table('food_order')).query();
        return Response.json({message: "Ordered"}, {status: 201});
    } catch (error) {
        return Response.json({message: "Can't order"}, {status: 404});
    }
}