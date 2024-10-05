import pictureManager from "../../../../utils/core/pictureManager/pictureManager";

export async function POST(req: Request) {
    try {
        const data = await req.formData();
        const file: File = data.get("pic") as File;

        let path = await pictureManager.savePicture(file, "public/images/clientPFP/");
        await new Promise(re => setTimeout(re, 5000));
        let output = new FormData();
        let s: File = await pictureManager.readPicture(path);
        console.log({canit: s})
        output.append("pic", s);
        return new Response(output, {status: 200})
    } catch (error) {
        console.log(error);
        return Response.json({message: 'error'}, {status: 500});
    }
} 