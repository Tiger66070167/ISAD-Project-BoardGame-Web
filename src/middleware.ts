import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import accountFetcher from '../utils/core/fetcher/tableFetcher/accountFetcher';
import bookingFetcher from '../utils/core/fetcher/tableFetcher/bookingFetcher';
import { bookingData } from '../utils/typeStorage/bookingType';

export async function middleware(req: NextRequest) {
    let oldAccess = req.cookies.get("token");
    let oldRefresh = req.cookies.get("askNew");

    if (!oldAccess || !oldRefresh) {
        if (req.nextUrl.pathname.startsWith('/admin') ||
            req.nextUrl.pathname.startsWith('/profile') ||
            req.nextUrl.pathname.startsWith('/food')
        ) { return NextResponse.redirect(new URL("/", req.url)); }
    } else {
        if (req.nextUrl.pathname.startsWith('/profile')) {
            let account = new accountFetcher();
            let data = await account.checkToken(oldAccess.value, oldRefresh.value);
            if (!req.url.split("/").includes("" + data?.user_id)) { return NextResponse.redirect(new URL("/", req.url)) }
        } else if (req.nextUrl.pathname === "/booking") {
            let account = new accountFetcher();
            let data = await account.checkToken(oldAccess.value, oldRefresh.value);
            if (data?.role === "admin") {return NextResponse.redirect(new URL("/admin/BookingAdmin", req.url))}
        } else if (req.nextUrl.pathname === "/boardGame") {
            let account = new accountFetcher();
            let data = await account.checkToken(oldAccess.value, oldRefresh.value);
            if (data?.role === "admin") {return NextResponse.redirect(new URL("/admin/BoardGameAdmin", req.url))}
        } else if (req.nextUrl.pathname.startsWith("/food")) {
            let account = new accountFetcher();
            let data = await account.checkToken(oldAccess.value, oldRefresh.value);
            
            if (data?.role === "admin") {return NextResponse.redirect(new URL("/admin/modifyFood", req.url))}
            if (data) {
                let book = new bookingFetcher();
                let bookingData: bookingData | null = await book.getBooking(data.user_id);

                if (bookingData) {
                    if (!(req.nextUrl.pathname.split("/").includes(bookingData.table_id+""))) {
                        return NextResponse.redirect(new URL("/", req.url))
                    }
                }
            }   
        }
    };
    return NextResponse.rewrite(req.nextUrl);
}