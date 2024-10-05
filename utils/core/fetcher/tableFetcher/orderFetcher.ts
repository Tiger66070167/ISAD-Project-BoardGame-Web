import fetcher from "../fetcher";
import { foodOrder } from "../../../typeStorage/foodType";

export default class orderFetcher extends fetcher {
    public async chooseFood(table_id: number, food_id: number, amount: number): Promise<boolean> {
        try {
            await this.postFetcher("http://localhost:3000/api/food/order/orderFood", {table_id, food_id, amount});
            return true;
        } catch (error) { 
            return false;
        }
    }

    public async deleteChooseFood(order: foodOrder) {
        try {
            await this.deleteFetcher("http://localhost:3000/api/food/order/deleteChooseFood", order);
            return true;
        } catch (error) {
            return false;
        }
    }
}