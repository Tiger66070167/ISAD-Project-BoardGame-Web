import database from "../../../../../../utils/Database/database";
import compare from "../../../../../../utils/Database/enumCompare";
import deleteDB from "../../../../../../utils/Database/state/deleteDB";
import { foodOrder } from "../../../../../../utils/typeStorage/foodType";

export async function DELETE(req: Request) {
    const data: foodOrder = await req.json();
    try {
        if (data.order_id) {
            await new database(new deleteDB().table('food_order').where('order_id', compare.EQUAL, data.order_id)).query();
       } else if (data.food_id && data.table_id) {
            await new database(new deleteDB().table('food_order').where('food_id', compare.EQUAL, data.food_id).where('table_id', compare.EQUAL, data.table_id)).query();
       } else {
            throw new Error("Not enought data");
       }
       return Response.json({message: "Deleted order"}, {status: 201});
    } catch (error) {
        return Response.json({message: "Cannot delete this order"}, {status: 404});
    }
}