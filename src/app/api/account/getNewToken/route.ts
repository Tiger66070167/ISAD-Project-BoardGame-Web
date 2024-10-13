import { cookies } from "next/headers";
import tokenManage from "../../../../../utils/core/Account/tokenManage";
import database from "../../../../../utils/Database/database";
import select from "../../../../../utils/Database/state/select";
import { users } from "../../../../../utils/typeStorage/tableDatabase";
import compare from "../../../../../utils/Database/enumCompare";
import { userInfo } from "../../../../../utils/typeStorage/accountType";

export async function POST(req: Request) {
    const cookie = cookies();
    let data = await req.json();
    try {
        let tokenData: userInfo = await tokenManage.getRefresh(data.refresh);
        let infoData = await new database(new select<users>('username', 'picture', 'role').table('users').where('users_id', compare.EQUAL, tokenData.user_id)).query();
        let {access, refresh} = await tokenManage.getNewToken({user_id: tokenData.user_id, username: infoData[0].username, profile: infoData[0].picture, role: infoData[0].role});

        cookie.set('token', access, {sameSite: "strict"});
        cookie.set('askNew', refresh, {sameSite: "strict"});
        
        let info = await tokenManage.getAccess(access);

        return Response.json(info, { status: 201 });
    } catch (error) {
        return Response.json({ message: "Something isn't right" }, { status: 401 });
    }
}