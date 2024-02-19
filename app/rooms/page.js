import RoomsListFilter from "@/components/RoomsListFilter"
import { PrismaClient } from "@prisma/client"

const client = new PrismaClient()


async function getRooms() {
    return await client.rooms.findMany({
        include: {
            photos: true
        }
    })
}

async function getMinMaxPrice() {
    const minMax = await client.rooms.aggregate({
        _min: {
            price: true
        },
        _max: {
            price: true
        }
    })

    return minMax
}

export default async function RoomsPage() {
    const rooms = await getRooms()

    const minMax = await getMinMaxPrice()
    return (
        <RoomsListFilter rooms={rooms} minMax={minMax} />
    )
}
