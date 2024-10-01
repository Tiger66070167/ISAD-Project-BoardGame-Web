import { foodMenu } from "../../typeStorage/foodType";
import fetcher from "../fetcher";

export default class foodFetcher extends fetcher{
    public async getAllFood(): Promise<Array<foodMenu>> {
        return this.getFetcher("http://localhost:3000/api/food/getAllFood");
    }

    public async addFood(name: string, type: "Fast food" | "Dish" | "Snack" | "Drink") {
        let type_num: number = 0;
        switch(type) {
            case"Fast food": type_num = 1; break;
            case"Dish": type_num = 2; break;
            case"Snack": type_num = 3; break;
            case"Drink": type_num = 4; break;
        }
        try {
            await this.postFetcher("http://localhost:3000/api/food/addFood", {name, type: type_num})
            return true;
        } catch (error) {
            return false;
        }
    }

    public async orderFood(table_id: number, food_id: number): Promise<boolean> {
        try {
            await this.postFetcher("http://localhost:3000/api/food/orderFood", {table_id, food_id});
            return true;
        } catch (error) {
            return false;
        }
    }
}