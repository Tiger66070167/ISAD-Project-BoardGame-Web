import database from "../../../../../utils/Database/database";
import compare from "../../../../../utils/Database/enumCompare";
import update from "../../../../../utils/Database/state/updateDB";
import { accountData } from "../../../../../utils/typeStorage/accountType";
import { users } from "../../../../../utils/typeStorage/tableDatabase";
import select from "../../../../../utils/Database/state/select";
let bcrypt = require('bcrypt');

export async function PATCH(req: Request) {
    const data: accountData = await req.json();

    let change: update<users> = new update();
    if (data.username != undefined) {change.change('username', data.username)}
    if (data.password != undefined) {
        let hashPass: string = bcrypt.hash(data.password, 10);
        change.change('password', hashPass);
    }
    if (data.first_name != undefined) {change.change('first_name', data.first_name)}
    if (data.last_name != undefined) {change.change('last_name', data.last_name)}
    if (data.phone != undefined) {change.change('phone', data.phone)}


    try {
        await new database(change.table('users').where('users_id', compare.EQUAL, data.users_id)).query();
        return Response.json({message: "Updated account"}, {status: 201});
    } catch (error) {
        console.log(error);
        return Response.json({message: "Cannot find this user"}, {status: 404});
    }
}