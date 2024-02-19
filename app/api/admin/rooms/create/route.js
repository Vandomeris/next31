import { PrismaClient } from "@prisma/client";
import { join } from 'path'
import { writeFile } from 'fs/promises'

export async function PUT(request) {
    const body = await request.formData()
    const data = Object.fromEntries(body)
    const photos = body.getAll('image')

    const prisma = new PrismaClient()
    const respRooms = await prisma.rooms.create({
        data: {
            name: data.name,
            peopleMax: parseInt(data.maxPeople),
            address: data.address,
            price: parseInt(data.price),
            description: data.description,
        }
    })
    const roomId = respRooms.id

    photos.forEach(async (photo) => {
        const bytes = await photo.arrayBuffer()
        const buffer = Buffer.from(bytes)
        const path = join('public', 'uploads', 'rooms', photo.name)
        await writeFile(path, buffer)

        const respPhoto = await prisma.rooms_photos.create({
            data: {
                name: photo.name,
                roomsId: roomId
            }
        })
    })
    return Response.json({})
}