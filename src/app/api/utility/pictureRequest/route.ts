import pictureManager from "../../../../../utils/core/pictureManager/pictureManager";

export async function POST(req: Request) {
    try {
        let data = await req.json();
        let output = new FormData();
        output.append("picture", await pictureManager.readPicture(data.picture));
        return new Response(output, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }, 
            status: 201
        });
    } catch (error) {
        return Response.json({message: "Cannot find this picture"}, {status: 404});
    }
}