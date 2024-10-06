import menuFetcher from "../../../../utils/core/fetcher/tableFetcher/menuFetcher";
import database from "../../../../utils/Database/database";
import compare from "../../../../utils/Database/enumCompare";
import select from "../../../../utils/Database/state/select";
import { food_menu } from "../../../../utils/typeStorage/tableDatabase";

export async function POST(req: Request) {
    try {
        const data = await req.formData();
        const file: File = data.get("pic") as File;

        let a = new menuFetcher();
        await a.addFood("asuramaru", "Fast food", "I'm a man", 15000, file);
        let result = await new database(new select<food_menu>('picture').table('food_menu').where('name', compare.EQUAL, "asuramaru")).query();
        console.log(result);
        return Response.json({message: result[0].picture}, {status: 200}) 
    } catch (error) {
        console.log(error);
        return Response.json({message: 'error'}, {status: 500});
    }
} 