import { redirect } from "next/navigation";
import database from "../../Database/database";
import compare from "../../Database/enumCompare";
import insert from "../../Database/state/insertDB";
import select from "../../Database/state/select";
import { users } from "../../typeStorage/tableDatabase";
import tokenManage from "./tokenManage";
import { cookies } from 'next/headers'
const bcrypt = require('bcrypt')

export default class loginSystem {
    private static formatDate(date: Date) {
        let output: string;
        output = ([date.getFullYear(), (date.getMonth() + 1).toString().padStart(2, '0'), (date.getDate().toString().padStart(2, "0"))].join('-') + ' ' + [(date.getHours().toString().padStart(2, '0')), (date.getMinutes().toString().padStart(2, '0')), (date.getSeconds().toString().padStart(2, '0'))].join(':'));
        return output;
    }
    
    public static async createUser(username: string, email: string, password: string): Promise<boolean> {
        const passwordHash = await bcrypt.hash(password, 10);
        
        try {
            await new database(new insert('default', username, 'customer', email, passwordHash, this.formatDate(new Date()), 'null', "default", 'null', 'null', 'null', 'default').table("users")).query();
        } catch (error) {
            console.log("Cannot create user, bug at loginSystem.ts"); //TODO: maybe delete this
            return false;
        }
        return true;
    }
    
    public static async checkLogin(email: string, password: string): Promise<boolean> {
        const cookie = cookies();
        try {
            const result: any = await new database(new select<users>('email', 'password', 'users_id', 'role', 'picture', 'username').table('users').where('email', compare.EQUAL, email)).query();

            if (await bcrypt.compare(password, result[0].password)) {
                let output: {access: string, refresh: string} = await tokenManage.getNewToken({user_id: result[0].users_id, username: result[0].username, profile: result[0].picture, role: result[0].role});
                cookie.set('token', output.access, {sameSite: 'strict'});
                cookie.set('askNew', output.refresh, {sameSite: 'strict'});
            } else {
                return false;
            }
        } catch (error) {
            console.log(`Can't find ${email} in our database`); //TODO: maybe delete this
            return false;
        }
        return true;
    }
}
