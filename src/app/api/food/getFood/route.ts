import food from "../../../../../utils/core/Food/food";

export async function GET() {
    try {
        let result = await food.getAllFood();
        return Response.json(result, {status: 201});
    } catch (error) {
        return Response.json({message: "Something went wrong."}, {status: 401});
    }

}