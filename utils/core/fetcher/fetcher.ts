import { boardGame } from "../../typeStorage/boardType";
import { foodMenu, foodOrder } from "../../typeStorage/foodType";

export default abstract class fetcher {
    protected async getFetcher(url: string) {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error("Cannot fetch data"); 
        }
        if (res.headers.get('content-type') === 'application/formData') {
            const output = await res.formData();
            return output;
        } else {
            const output = await res.json();
            return output;
        }
    }

    protected async postFetcher(url:string, data: boardGame | foodMenu | foodOrder | FormData) {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': (data instanceof FormData) ? 'application/formData' : 'application/json'
            }, 
            body: (data instanceof FormData) ? data : JSON.stringify(data)
        });
        if (!res.ok) {
            throw new Error("Cannot fetch data");
        }
        console.log("---------------------------------in-------------------------------------------");
        if (res.headers.get('content-type') === 'application/x-www-form-urlencoded') {
            let output = await res.formData();
            return output;
        } else {
            const output = await res.json();
            return output;
        } 
    }

    protected async deleteFetcher(url: string, data: boardGame | foodMenu | foodOrder | FormData) {
        const res = await fetch(url, {
            method: "DELETE",
            headers: {
                'Content-Type': (data instanceof FormData) ? 'application/formData' : 'application/json'
            }, 
            body: (data instanceof FormData) ? data : JSON.stringify(data)
        });
        if (!res.ok) {
            throw new Error("Cannot fetch data");
        }
        if (res.headers.get('content-type') === 'application/x-www-form-urlencoded') {
            let output = await res.formData();
            return output;
        } else {
            const output = await res.json();
            return output;
        }  
    }

    protected async putFetcher(url: string, data: boardGame | foodMenu | foodOrder | FormData) {
        const res = await fetch(url, {
            method: "PUT",
            headers: {
                'Content-Type': (data instanceof FormData) ? 'application/formData' : 'application/json'
            },
            body: (data instanceof FormData) ? data : JSON.stringify(data)
        });
        if (!res.ok) { throw new Error("Cannot fetch data") }
        if (res.headers.get('content-type') === 'application/x-www-form-urlencoded') {
            let output = await res.formData();
            return output;
        } else {
            const output = await res.json();
            return output;
        }  
    }

    protected async patchFetcher(url: string, data: boardGame | foodMenu | foodOrder | FormData) {
        const res = await fetch(url, {
            method: "PATCH",
            headers: {
                'Content-Type': (data instanceof FormData) ? 'application/formData' : 'application/json'
            },
            body: (data instanceof FormData) ? data : JSON.stringify(data)
        });
        if (!res.ok) { throw new Error("Cannot fetch data") }
        if (res.headers.get('content-type') === 'application/x-www-form-urlencoded') {
            let output = await res.formData();
            return output;
        } else {
            const output = await res.json();
            return output;
        }  
    }
}