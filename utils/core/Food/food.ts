import database from "../../Database/database";
import select from "../../Database/state/select";

export type foodMenu = {
    food_id: number,
    name: string,
    type: number
}

export default class food {
    public static async getAllFood(): Promise<Array<foodMenu> | null> {
        let result = null;
        try {
            result = await new database(new select('*').table('food_menu')).query();
        } catch (error) {
            console.log('Error at food.ts');
        }
        return result;
    }
}