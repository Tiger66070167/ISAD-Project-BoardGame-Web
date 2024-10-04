import { boardGame } from "../../typeStorage/boardType";
import { foodMenu, foodOrder } from "../../typeStorage/foodType";

export default abstract class fetcher {
    protected async getFetcher(url: string) {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error("Cannot fetch data"); 
        }
        const output = await res.json();
        return output;
    }

    protected async postFetcher(url:string, data: boardGame | foodMenu | foodOrder | FormData) {
        const res = await fetch(url, {
            method: "POST",
            body: (data instanceof FormData) ? data : JSON.stringify(data)
        });
        if (!res.ok) {
            throw new Error("Cannot fetch data");
        }
        const output = await res.json();
        console.log(output.message);
    }

    protected async deleteFetcher(url: string, data: boardGame | foodMenu | foodOrder | FormData) {
        const res = await fetch(url, {
            method: "DELETE",
            body: (data instanceof FormData) ? data : JSON.stringify(data)
        });
        if (!res.ok) {
            throw new Error("Cannot fetch data");
        }
        const output = await res.json();
        console.log(output.message);
    }

    protected async putFetcher(url: string, data:boardGame | foodMenu | foodOrder | FormData) {
        const res = await fetch(url, {
            method: "PUT",
            body: (data instanceof FormData) ? data : JSON.stringify(data)
        });
        if (!res.ok) { throw new Error("Cannot fetch data") }
        const output = await res.json();
        console.log(output.message);
    }
}