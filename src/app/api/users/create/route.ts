export async function POST(request: Request) {
    console.log(request);
    return Response.json(await request.json(), {status: 201});
}