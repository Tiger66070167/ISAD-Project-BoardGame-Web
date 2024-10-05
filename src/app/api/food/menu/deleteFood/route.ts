import select from "../../../../../../utils/Database/state/select";
import database from "../../../../../../utils/Database/database";
import compare from "../../../../../../utils/Database/enumCompare";
import deleteDB from "../../../../../../utils/Database/state/deleteDB";
import { foodMenu } from "../../../../../../utils/typeStorage/foodType";
import { food_menu } from "../../../../../../utils/typeStorage/tableDatabase";
import pictureManager from "../../../../../../utils/core/pictureManager/pictureManager";

export async function DELETE(req: Request) {
    let data: foodMenu = await req.json();
    try {
        let oldPath = await new database(new select<food_menu>('picture').table('food_menu').where("food_id", compare.EQUAL, data.food_id), new deleteDB().table('food_menu').where('food_id', compare.EQUAL, data.food_id!)).query();
        console.log(oldPath);
        await pictureManager.deletePicture(oldPath[0].picture);
        return Response.json({message: "Deleted"}, {status: 201});
    } catch (error) {
        console.log(error);
        return Response.json({message: "Cannot delete this food"}, {status: 400});
    }
}