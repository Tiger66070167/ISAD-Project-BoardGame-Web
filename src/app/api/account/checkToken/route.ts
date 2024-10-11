import { cookies } from "next/headers";
import tokenManage from "../../../../../utils/core/Account/tokenManage";

export async function POST(req: Request) {
    const cookie = cookies();
    let data = await req.json();
    try {
        let [access, refresh] = await tokenManage.checkToken(data.access, data.refresh);
        let info;
        if (access && refresh) {
            cookie.set('token', access, {sameSite: "strict"});
            cookie.set('askNew', refresh, {sameSite: "strict"});

            info = await tokenManage.getAccess(access);
        } else {
            throw new Error("Can't find this token");
        }
        return Response.json(info, { status: 201 });
    } catch (error) {
        cookie.delete("askNew");
        cookie.delete("token");

        return Response.json({ message: "Something isn't right" }, { status: 401 });
    }
}