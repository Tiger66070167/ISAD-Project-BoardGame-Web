import { accountData } from "../../typeStorage/accountType";
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

    protected async postFetcher(url:string, data: accountData | boardGame | foodMenu | foodOrder | FormData | any) {
        const res = await fetch(url, {
            method: "POST",
            body: (data instanceof FormData) ? data : JSON.stringify(data)
        });
        if (!res.ok) {
            throw new Error("Cannot fetch data");
        }
        let output = await res.json();
        return output;
    }

    protected async deleteFetcher(url: string, data: accountData | boardGame | foodMenu | foodOrder | FormData | any) {
        const res = await fetch(url, {
            method: "DELETE",
            body: (data instanceof FormData) ? data : JSON.stringify(data)
        });
        if (!res.ok) {
            throw new Error("Cannot fetch data");
        }
        let output = await res.json();
        return output; 
    }

    protected async putFetcher(url: string, data: accountData | boardGame | foodMenu | foodOrder | FormData | any ) {
        const res = await fetch(url, {
            method: "PUT",
            body: (data instanceof FormData) ? data : JSON.stringify(data)
        });
        if (!res.ok) { throw new Error("Cannot fetch data") }
        let output = await res.json();
        return output; 
    }

    protected async patchFetcher(url: string, data: accountData | boardGame | foodMenu | foodOrder | FormData | any) {
        const res = await fetch(url, {
            method: "PATCH",
            body: (data instanceof FormData) ? data : JSON.stringify(data)
        });
        if (!res.ok) { throw new Error("Cannot fetch data") }
        let output = await res.json();
        return output;
    }
}