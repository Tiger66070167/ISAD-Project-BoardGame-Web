require('dotenv').config();
var jwt = require('jsonwebtoken');

let token: string;

export async function POST(request: Request) {
    token = jwt.sign({name: 'Anawat'}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1h' });
    console.log(token);
    return Response.json({message: "done"}, {status: 220});
}

export async function GET(request: Request) {
    try {
        const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET )
        return Response.json({message: decode}, {status: 201});
    } catch (error) {
        return Response.json({message: "No token yet."}, {status: 403});
    }
}