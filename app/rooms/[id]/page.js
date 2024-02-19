import BookingForm from "@/components/rooms/BookingForm"
import { PrismaClient } from "@prisma/client"



export default async function RoomIdPage({ params: { id } }) {

    const prisma = new PrismaClient()

    const room = await prisma.rooms.findFirst({
        where: {
            id: parseInt(id)
        }
    })


    return (
        <div className="container mx-auto">

            <div className="flex justify-between">

                <div>
                    <h1 className="text-3xl font-bold">{room.name}</h1>
                    <h3 className="mt-5">{room.address}</h3>
                    <p className="mt-10">{room.description}</p>
                </div>

                <div>
                    <p className="font-bold text-2xl">{room.price}₽ за сутки</p>
                    <p className="mt-5 flex items-center gap-x-2 text-xl">Макс. {room.peopleMax} <img className=" h-8" src="/img/icons/people.png" alt="" /> </p>
                </div>

            </div>

            <BookingForm maxGuests={room.peopleMax} roomId={room.id} price={room.price} />
        </div>
    )
}
