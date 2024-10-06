import menuFetcher from "../../../../utils/core/fetcher/tableFetcher/menuFetcher";

export async function POST(req: Request) {
    try {
        const data = await req.formData();
        const file: File = data.get("pic") as File;

        let a = new menuFetcher();
        await a.addFood("shinoa", 'Dish', "so beautiful", 1000000, file);
        return Response.json({message: "success"}, {status: 200}) 
    } catch (error) {
        console.log(error);
        return Response.json({message: 'error'}, {status: 500});
    }
} 