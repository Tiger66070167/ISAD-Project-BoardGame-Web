import database from "../../../../../utils/Database/database";
import compare from "../../../../../utils/Database/enumCompare";
import update from "../../../../../utils/Database/state/updateDB";
import { foodMenu } from "../../../../../utils/typeStorage/foodType";
import { food_menu } from "../../../../../utils/typeStorage/tableDatabase";

export async function PUT(req: Request) {
    const data: foodMenu = await req.json();
    try {
        await new database(new update<food_menu>()
                            .change('name', data.name!)
                            .change('type', data.type!)
                            .change('description', data.description!)
                            .change('price', data.price!)
                            .change('picture', data.picture!)
                            .table('food_menu').
                            where('food_id', compare.EQUAL, data.food_id!)).query();
        return Response.json({message: `Updated food ${data.food_id}`}, {status: 201});
    }catch (error) {
        console.log(error);
        return Response.json({message: `Can't find food ${data.food_id}`}, {status: 403});
    }
}