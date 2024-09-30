import database from "../../../../../utils/Database/database";
import insert from "../../../../../utils/Database/state/insertDB";
import { foodMenu } from "../../../../../utils/typeStorage/foodType";
import { food_menu } from "../../../../../utils/typeStorage/tableDatabase";

 export async function POST(req: Request) {
    const data: foodMenu = await req.json();
    try {
        await new database(new insert<food_menu>('default', data.name, data.type).table('food_menu')).query();
        return Response.json({message: "created menu"}, {status: 201});
    } catch (error) {
        return Response.json({message: "Cannot add new menu"}, {status: 400});
    }
 }