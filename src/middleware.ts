import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import tokenManage from '../utils/core/Account/tokenManage';
import accountFetcher from '../utils/core/fetcher/tableFetcher/accountFetcher';

export async function middleware(req: NextRequest) {
    let oldAccess = req.cookies.get("token");
    let oldRefresh = req.cookies.get("askNew");

    if (!oldAccess || !oldRefresh) {
        if (req.nextUrl.pathname.startsWith('/admin') ||
            req.nextUrl.pathname.startsWith('profile')
        ) { return NextResponse.redirect(new URL("/", req.url)); }
        else if (req.nextUrl.pathname.startsWith('/food/foodDetail')) { return NextResponse.redirect(new URL("/login", req.url)); }
    } else {
        if (req.nextUrl.pathname.startsWith('/profile')) {
            let account = new accountFetcher();
            let data = await account.checkToken(oldAccess.value, oldRefresh.value);
            if (!req.url.split("/").includes("" + data?.id)) { return NextResponse.redirect(new URL("/", req.url)) }
        }
        // if (req.nextUrl.pathname === ("/")) {
        //     let account = new accountFetcher();
        //     let data = await account.checkToken(oldAccess.value, oldRefresh.value);
        //     if (data?.role === "admin") {return NextResponse.re(new URL("/admin", req.url))}
        // }
    };
    return NextResponse.rewrite(req.nextUrl);
}