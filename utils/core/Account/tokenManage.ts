import select from "../../Database/state/select";
import database from "../../Database/database";
import compare from "../../Database/enumCompare";
import update from "../../Database/state/updateDB";
import { users } from "../../typeStorage/tableDatabase";

const jwt = require('jsonwebtoken');
require('dotenv').config();

export default class tokenManage {
    public constructor() {}

    public static async getNewToken(user_id: number, user_role: string): Promise<{access: string, refresh: string}> {
        const userInfo = {
            id: user_id,
            role: user_role
        }
        const access: string = jwt.sign(userInfo, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
        const refresh: string = jwt.sign(userInfo, process.env.REFRESH_TOKEN_SECRET);

        try {
            await new database(new update<users>().change('token', refresh).table('users').where('users_id', compare.EQUAL, user_id)).query();
        } catch (error) {
            console.log("getNewToken fail at file tokenManage.ts");
        }

        return {access, refresh};
    }

    public static async checkRefreshToken(refresh: string): Promise<Boolean> {
        try {
            const refreshData = jwt.verify(refresh, process.env.REFRESH_TOKEN_SECRET);
            const userToken = await new database(new select<users>('token').table('users').where('users_id', compare.EQUAL, refreshData.id)).query();
            
            if (refresh === userToken[0].token) { return true }
            else { return false }
        } catch (error) {
            console.log("Bug at tokenManage.ts");
            return false;
        }
    }
}