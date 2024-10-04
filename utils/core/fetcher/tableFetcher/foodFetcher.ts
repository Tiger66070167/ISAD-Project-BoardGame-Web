import { foodMenu } from "../../../typeStorage/foodType";
import fetcher from "../../fetcher/fetcher";

export default class foodFetcher extends fetcher{
    public async getAllFood(): Promise<Array<foodMenu>> {
        return this.getFetcher("http://localhost:3000/api/food/getAllFood");
    }

    public async addFood(name: string, type: "Fast food" | "Dish" | "Snack" | "Drink", description: string, price: number, picture: File) {
        let type_num: number = 0;
        switch(type) {
            case"Fast food": type_num = 1; break;
            case"Dish": type_num = 2; break;
            case"Snack": type_num = 3; break;
            case"Drink": type_num = 4; break;
        }
        
        let data = new FormData();

        data.append("name", name);
        data.append("type", type_num + '');
        data.append("description", description);
        data.append("price", price + '');
        data.append("picture", picture);

        try {
            await this.postFetcher("http://localhost:3000/api/food/addFood", data)
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

    public async deleteFood(food_id: number): Promise<boolean> {
        try {
            await this.deleteFetcher("http://localhost:3000/api/food/deleteFood", {food_id});
            return true;
        } catch (error) {
            return false;
        }
    }

    public async updateFood(food_id: number, name?: string, type?: "Fast food" | "Dish" | "Snack" | "Drink", description?: string, price?: number, picture?: File) {
        let type_num: number = 0;
        switch(type) {
            case"Fast food": type_num = 1; break;
            case"Dish": type_num = 2; break;
            case"Snack": type_num = 3; break;
            case"Drink": type_num = 4; break;
        }

        let data = new FormData();

        data.append("food_id", food_id + "");
        if(name) data.append("name", name);
        if(type) data.append("type", type_num + "");
        if(description) data.append("description", description);
        if(price) data.append("price", price + '');
        if(picture) data.append("picture", picture);
 
        try {
            await this.putFetcher("http://localhost:3000/api/food/updateFood", data);
            return true;
        } catch (error) {
            return false;
        }
    }
}