import { PrismaClient } from "@prisma/client";

export async function POST(request) {
    const { id, fio, phone, email, passport, guests, range, totalSum } = Object.fromEntries(await request.formData())
    const { from, to } = JSON.parse(range)


    const prisma = new PrismaClient()

    const resp = await prisma.bookings.create({
        data: {
            fio: fio,
            phone: phone,
            email: email,
            passport: passport,
            guests: parseInt(guests),
            dateFrom: from,
            dateTo: to,
            roomsId: parseInt(id),
            totalSum: 5000
        }
    })

    return Response.json({})
}