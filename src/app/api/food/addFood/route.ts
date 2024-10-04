import pictureManager from "../../../../../utils/core/pictureManager/pictureManager";
import database from "../../../../../utils/Database/database";
import insert from "../../../../../utils/Database/state/insertDB";
import { food_menu } from "../../../../../utils/typeStorage/tableDatabase";

 export async function POST(req: Request) {
    const data = await req.formData();

    let name: string | null = data.get("name") as string || null;
    let type: string | null = data.get("type") as string || null;
    let description: string | null = data.get("description") as string || null;
    let price: string | null = data.get("price") as string || null;
    let picture: File | null = data.get("picture") as File || null;
    let path = await pictureManager.savePicture(picture, "public/images/menuPicture");

    try {
        await new database(new insert<food_menu>('default', name, type, description, price, path).table('food_menu')).query();
        return Response.json({message: "created menu"}, {status: 201});
    } catch (error) {
        return Response.json({message: "Cannot add new menu"}, {status: 400});
    }
 }