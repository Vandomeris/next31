import { PrismaClient } from "@prisma/client"

export async function DELETE(request) {
    const { id } = await request.json()

    const prisma = new PrismaClient()

    const resp = await prisma.rooms.delete({
        where: {
            id: parseInt(id)
        }
    })

    if (resp) {
        return Response.json({
            result: 'ok'
        })
    } else {
        return Response.json({
            result: 'fail'
        })
    }
}