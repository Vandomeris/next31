import { PrismaClient } from "@prisma/client"

import RoomsAdmin from "@/components/rooms/RoomsAdmin"

const client = new PrismaClient()
async function getRooms() {
    return await client.rooms.findMany({
        select: {
            id: true,
            name: true,
            peopleMax: true,
            address: true,
            price: true
        }
    })
}

export default async function AdminRooms() {




    const rooms = await getRooms()
    return (
        <div className="container mx-auto">


            <RoomsAdmin rooms={rooms} />


        </div >
    )
}
