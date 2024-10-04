import pictureManager from "../../../../utils/core/pictureManager/pictureManager";

export async function POST(req: Request) {
    try {
        const data = await req.formData();
        const file: File = data.get("pic") as File;
        console.log(file);

        await pictureManager.savePicture(file, "public/images/clientPFP/");
        return Response.json({message: 'done'}, {status: 200});
    } catch (error) {
        console.log(error);
        return Response.json({message: 'error'}, {status: 500});
    }
} 