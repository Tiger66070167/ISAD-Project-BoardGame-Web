import database from "../../../../../../utils/Database/database";
import compare from "../../../../../../utils/Database/enumCompare";
import select from "../../../../../../utils/Database/state/select";
import { users } from "../../../../../../utils/typeStorage/tableDatabase";

export async function GET(req: Request, { params }: {params: {slug: number}}) {
    try {
        const data = await new database(new select<users>('users_id', 'username', 'role', 'email', 'password', 'created_at', 'token', 'picture', 'first_name', 'last_name', 'phone').table('users').where('users_id', compare.EQUAL, params.slug)).query();
        return Response.json(data[0], {status: 201});
    } catch (error) {
        return Response.json({message: "cannot find this user"}, {status: 404});
    }
}