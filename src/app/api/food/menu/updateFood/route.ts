import pictureManager from "../../../../../../utils/core/pictureManager/pictureManager";
import database from "../../../../../../utils/Database/database";
import compare from "../../../../../../utils/Database/enumCompare";
import select from "../../../../../../utils/Database/state/select";
import update from "../../../../../../utils/Database/state/updateDB";
import { food_menu } from "../../../../../../utils/typeStorage/tableDatabase";


export async function PUT(req: Request) {
    const data = await req.formData();
    const food_id = parseInt(data.get("food_id") as string);

    let name: string | null = data.get("name") as string || null;
    let type: string | null = data.get("type") as string || null;
    let description: string | null = data.get("description") as string || null;
    let price: string | null = data.get("price") as string || null;
    let picture: File | null = data.get("picture") as File || null;

    let change = new update();
    if (name) change.change('name', name);
    if (type) change.change('type', parseInt(type));
    if (description) change.change('description', description);
    if (price) change.change('price', parseInt(price));
    if (picture) {
        let path = await pictureManager.savePicture(picture, 'public/images/menuPicture');
        change.change('picture', path);
    }

    change.table('food_menu').where('food_id', compare.EQUAL, food_id);
    try {
        let oldPath = await new database(new select<food_menu>('picture').table('food_menu').where('food_id', compare.EQUAL, food_id), change).query();
        await pictureManager.deletePicture(oldPath[0].picture);
        return Response.json({message: `Updated food ${food_id}`}, {status: 201});
    }catch (error) {
        console.log(error);
        return Response.json({message: `Can't find food ${food_id}`}, {status: 403});
    }
}