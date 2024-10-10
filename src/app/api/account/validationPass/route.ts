import database from "../../../../../utils/Database/database";
import compare from "../../../../../utils/Database/enumCompare";
import update from "../../../../../utils/Database/state/updateDB";
import { users } from "../../../../../utils/typeStorage/tableDatabase";
const bcrypt = require("bcrypt")

export async function PATCH(req: Request) {
    const data = await req.json();

    try {
        console.log(data.current, data.realPass);
        if (await bcrypt.compare(data.current, data.realPass)) {
            let hashPass = await bcrypt.hash(data.newPass, 10);
            await new database(new update<users>().change('password', hashPass).table('users').where('users_id', compare.EQUAL, data.users_id)).query();
            return Response.json({message: "Changed password"}, {status: 201});
        } else {
            throw new Error("Wrong password")
        }
    } catch (error) {
        return Response.json({message: "Cannot change this password"}, {status: 401});
    }
}