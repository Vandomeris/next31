import { PrismaClient } from "@prisma/client";
import { join } from 'path'
import { writeFile } from 'fs/promises'

export async function PUT(request) {
    const body = await request.formData()
    const data = Object.fromEntries(body);

    const image = data.image
    const bytes = await image.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const path = join('public', 'uploads', 'rooms', image.name)

    await writeFile(path, buffer)


    console.log(data.image);
    const prisma = new PrismaClient()

    const resp = await prisma.rooms.create({
        data: {
            name: data.name,
            peopleMax: parseInt(data.maxPeople),
            address: data.address,
            price: parseInt(data.price),
            description: data.description,
            image: image.name
        }
    })
    // console.log(resp);
    return Response.json({})
}





















