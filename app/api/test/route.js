import { PrismaClient } from "@prisma/client";

export async function POST(request) {
    const client = new PrismaClient()
    const data = await request.json()
    console.log(data);
    const res = await client.products.create({
        data: {
            name: data.name,
            price: parseFloat(data.price),
            description: data.desc
        }
    })

    return Response.json({
        'result': 'ok'
    })
}