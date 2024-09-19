import { NextResponse } from "next/server";
import { mysqlPool } from "../../../../utils/db";

export async function GET(req:any) {
    const promisePool = mysqlPool.promise()
    const [row, fields] = await promisePool.query(
        'SELECT * FROM `attractions`;'
    )
    return NextResponse.json(row)
}