import pictureManager from "../../../../../utils/core/pictureManager/pictureManager";
import database from "../../../../../utils/Database/database";
import compare from "../../../../../utils/Database/enumCompare";
import select from "../../../../../utils/Database/state/select";
import update from "../../../../../utils/Database/state/updateDB";
import { users } from "../../../../../utils/typeStorage/tableDatabase";
const bcrypt = require("bcrypt");

export async function PATCH(req: Request) {
    const data: FormData = await req.formData();

    let users_id: number = parseInt(data.get("users_id") as string);
    let username: string = data.get("username") as string;
    let password: string = data.get("password") as string;
    let picture: File = data.get("picture") as File;
    let first_name: string = data.get("first_name") as string;
    let last_name: string = data.get("last_name") as string;
    let phone: string = data.get("phone") as string;

    let change: update<users> = new update();
    if (username) {change.change('username', username)}
    if (password) {
        let hashPass = bcrypt.hash(password, 10);
        change.change('password', hashPass);
    }
    if (picture) {
        let path: string = await pictureManager.savePicture(picture, "images/clientPFP/");
        change.change('picture', path);
    }
    if (first_name) {change.change("first_name", first_name);}
    if (last_name) {change.change('last_name', last_name)}
    if (phone) {change.change('phone', phone)}

    try {
        let path = (await new database(new select<users>('picture').table('users').where('users_id', compare.EQUAL, users_id), change.table('users').where('users_id', compare.EQUAL, users_id)).query())[0].picture;
        await pictureManager.deletePicture(path);
        return Response.json({message: "Updated account"}, {status: 201});
    } catch (error) {
        return Response.json({message: "Cannot find this user"}, {status: 404});
    }

}