import { redirect } from "next/navigation";
import database from "../../Database/database";
import compare from "../../Database/enumCompare";
import insert from "../../Database/state/insertDB";
import select from "../../Database/state/select";
import { users } from "../../typeStorage/tableDatabase";
import tokenManage from "./tokenManage";
import { cookies } from 'next/headers'
const bcrypt = require('bcrypt')

const cookie = cookies();

export default class loginSystem {
    private static formatDate(date: Date) {
        let output: string;
        output = ([date.getFullYear(), (date.getMonth() + 1).toString().padStart(2, '0'), (date.getDate().toString().padStart(2, "0"))].join('-') + ' ' + [(date.getHours().toString().padStart(2, '0')), (date.getMinutes().toString().padStart(2, '0')), (date.getSeconds().toString().padStart(2, '0'))].join(':'));
        return output;
    }

    public static async createUser(username: string, email: string, password: string): Promise<boolean> {
        const passwordHash = await bcrypt.hash(password, 10);

        try {
            await new database(new insert('default', username, 'customer', email, passwordHash, this.formatDate(new Date()), 'null').table("users")).query();
        } catch (error) {
            console.log("Cannot create user, bug at user.ts"); //TODO: maybe delete this
            return false;
        }
        return true;
    }

    public static async checkLogin(email: string, password: string): Promise<boolean> {
        try {
            const result: any = await new database(new select<users>('email', 'password', 'users_id', 'role').table('users').where('email', compare.EQUAL, email)).query();

            if (bcrypt.compare(password, result[0].password)) {
                let output: {access: string, refresh: string} = await tokenManage.getNewToken(result[0].users_id, result[0].role);
                cookie.set('token', output.access);
                cookie.set('askNew', output.refresh);
            } else {
                return false;
            }
        } catch (error) {
            console.log(`Can't find ${email} in our database`); //TODO: maybe delete this
            return false;
        }
        redirect('/');
    }
}
