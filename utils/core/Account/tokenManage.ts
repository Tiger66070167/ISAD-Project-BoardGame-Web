import select from "../../Database/state/select";
import database from "../../Database/database";
import compare from "../../Database/enumCompare";
import update from "../../Database/state/updateDB";
import { users } from "../../typeStorage/tableDatabase";
import { userInfo } from "../../typeStorage/accountType";
const jwt = require("jsonwebtoken");
require("dotenv").config();

export default class tokenManage {
    public constructor() { }

    public static async getNewToken(data: userInfo): Promise<{ access: string; refresh: string }> {
        const userInfo: userInfo = {
            user_id: data.user_id,
            username: data.username!,
            profile: data.profile!,
            role: data.role!,
        };
        const access: string = jwt.sign(userInfo, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "1h",
        });
        const refresh: string = jwt.sign(
            userInfo,
            process.env.REFRESH_TOKEN_SECRET
        );

        try {
            await new database(
                new update<users>()
                    .change("token", refresh)
                    .table("users")
                    .where("users_id", compare.EQUAL, data.user_id)
            ).query();
        } catch (error) {
            console.log("getNewToken fail at file tokenManage.ts");
        }

        return { access, refresh };
    }

    public static async checkRefreshToken(refresh: string): Promise<Boolean> {
        try {
            const refreshData = await this.getRefresh(refresh);
            const userToken = await new database(
                new select<users>("token")
                    .table("users")
                    .where("users_id", compare.EQUAL, refreshData.user_id)
            ).query();
            
            if (refresh === userToken[0].token) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            return false;
        }
    }

    public static async checkToken(oldAccess: string, oldRefresh: string) {
        let data = await this.getAccess(oldAccess);
        if (data === "") {
            if (await this.checkRefreshToken(oldRefresh)) {
                let a = await this.getRefresh(oldRefresh) ;
                let { access, refresh } = await this.getNewToken(a);

                return [access, refresh];
            } else {
                throw new Error("Invalid token");
            }
        } else {
            return [oldAccess, oldRefresh]
        }
    }

    public static async getAccess(access: string) {
        try {
            let out = await jwt.verify(access, process.env.ACCESS_TOKEN_SECRET);
            
            if (Date.now() >= out.exp * 1000 || !out.exp) {throw new Error}

            return out;
        } catch (error) {
            return "";
        }
    }

    public static async getRefresh(refresh: string) {
        try {
            let out = await jwt.verify(refresh, process.env.REFRESH_TOKEN_SECRET);

            return out;
        } catch (error) {
            return "";
        }
    }
}