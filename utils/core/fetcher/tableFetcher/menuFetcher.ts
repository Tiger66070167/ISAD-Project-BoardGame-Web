import fetcher from "../fetcher";

export default class menuFetcher extends fetcher{
    public async getAllFood(): Promise<Array<any>> {
        try {
            const data = await this.getFetcher("http://localhost:3000/api/food/menu/getAllFood");

            for (let i = 0; i < data.length; i++) {
                data[i].type = menuFetcher.getType(data[i].type);
            }

            return data;
        } catch (error) {
            return [];
        }
    }

    public async getFood(food_id: number) {
        try {
            const data = await this.getFetcher(`http://localhost:3000/api/food/menu/${food_id}/getFood`);
            return data;
        } catch (error) {
            return [];
        }
    }
 
    public async addFood(name: string, type: string, description: string, price: number, picture: File) {
        let type_num: number = menuFetcher.getType(type as string) as number;
        
        let data = new FormData();

        data.append("name", name);
        data.append("type", type_num + '');
        data.append("description", description);
        data.append("price", price + '');
        data.append("picture", picture);

        try {
            await this.postFetcher("http://localhost:3000/api/food/menu/addFood", data)
            return true;
        } catch (error) {
            return false;
        }
    }

    public async deleteFood(food_id: number): Promise<boolean> {
        try {
            await this.deleteFetcher("http://localhost:3000/api/food/menu/deleteFood", {food_id});
            return true;
        } catch (error) {
            return false;
        }
    }

    public async updateFood(food_id: number, name?: string, type?: "Fast food" | "Dish" | "Snack" | "Drink", description?: string, price?: number, picture?: File) {
        const type_num = menuFetcher.getType(type as string);

        let data = new FormData();

        data.append("food_id", food_id + "");
        if(name) data.append("name", name);
        if(type) data.append("type", type_num + "");
        if(description) data.append("description", description);
        if(price) data.append("price", price + '');
        if(picture) data.append("picture", picture);
 
        try {
            await this.putFetcher("http://localhost:3000/api/food/menu/updateFood", data);
            return true;
        } catch (error) {
            return false;
        }
    }

    public static getType(type: number | string): string | number {
        if (typeof type === "string") {
            let type_num: number = 0;
            switch(type) {
                case"Fast food": type_num = 1; break;
                case"Dish": type_num = 2; break;
                case"Snack": type_num = 3; break;
                case"Drink": type_num = 4; break;
            } 
            return type_num;
        } else if (typeof type === "number") {
            let type_string: string = '';
            switch(type) {
                case 1: type_string = "Fast food"; break;
                case 2: type_string = "Dish"; break;
                case 3: type_string = "Snack"; break;
                case 4: type_string = "Drink"; break;
            }
            return type_string;
        }
        return 0;
    }
}