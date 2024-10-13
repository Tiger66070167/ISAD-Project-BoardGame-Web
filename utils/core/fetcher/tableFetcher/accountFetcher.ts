import { userInfo } from "../../../typeStorage/accountType";
import fetcher from "../fetcher";

export default class accountFetcher extends fetcher {
    public async getAccount(users_id: number) {
        try {
            let data = await this.getFetcher(`http://localhost:3000/api/account/${users_id}/getAccount`);
            return data;
        } catch (error) {
            return [];
        }
    }

    public async updateAccount(users_id: number, username?: string, password?: string, picture?: File, first_name?: string, last_name?: string, phone?: string) {
        if (picture) {
            let tmp = new FormData();
            tmp.append("users_id", '' + users_id);
            if (username) tmp.append("username", username);
            if (password) tmp.append("password", password);
            tmp.append("picture", picture);
            if (first_name) tmp.append("first_name", first_name);
            if (last_name) tmp.append("last_name", last_name);
            if (phone) tmp.append("phone", phone);

            try {
                await this.patchFetcher("http://localhost:3000/api/account/changeAccountFormData", tmp);
                return true;
            } catch (error) {
                return false;
            }
        } else {
            try {
                await this.patchFetcher("http://localhost:3000/api/account/changeAccountJson", { users_id, username, password, first_name, last_name, phone })
                return true;
            } catch (error) {
                return false;
            }
        }
    }

    public async changePass(users_id: number, realPass: string, current: string, newPass: string) {
        try {
            await this.patchFetcher("http://localhost:3000/api/account/validationPass", { users_id, realPass, current, newPass });
            return true;
        } catch (error) {
            return false;
        }
    }

    public async checkToken(access?: string, refresh?: string) {
        if (!access && !refresh) {
            let allCookie: string[] = document.cookie.split(";");
            let cookie = new Map();
            allCookie.forEach((noSplit) => {
                let [key, value] = noSplit.split("=");
                cookie.set(key.trim(), value);
            })
            access = cookie.get("token");
            refresh = cookie.get("askNew");
        }

        if (access && refresh) {
            try {
                let data: userInfo = await this.postFetcher("http://localhost:3000/api/account/checkToken", { access, refresh });
                return data;
            } catch (error) {
                return null;
            }
        }
        else {
            return null;
        }

    }

    public async getNewToken() {
        let allCookie: string[] = document.cookie.split(";");
        let cookie = new Map();
        allCookie.forEach((noSplit) => {
            let [key, value] = noSplit.split("=");
            cookie.set(key.trim(), value);
        })
        let refresh = cookie.get("askNew");

        try {
            await this.postFetcher("http://localhost:3000/api/account/getNewToken", {refresh});
            return true
        } catch (error) {
            return false;
        }
    }
}