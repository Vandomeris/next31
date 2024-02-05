import { PrismaClient } from "@prisma/client";

export async function POST(request) {

    const data = await request.json()
    console.log(data);

    const client = new PrismaClient()

    const resp = await client.rooms.findMany({
        where: {
            price: {
                lte: data.price
            },
            peopleMax: {
                gte: data.guests
            }
        }
    })

    console.log(resp);

    return Response.json(resp)
}