'use client'

import { useState } from "react"
import RoomCard from "./RoomCard"
import RoomFilter from "./RoomFilter"


export default function RoomsListFilter({ rooms, minMax }) {

    const [Rooms, setRooms] = useState(rooms)

    return (
        <div className="flex flex-wrap gap-y-8 container mx-auto justify-between">
            <RoomFilter setRooms={setRooms} minPrice={minMax._min.price} maxPrice={minMax._max.price} />
            {
                Rooms.map((room) => (
                    <RoomCard
                        key={room.id}
                        name={room.name}
                        peopleMax={room.peopleMax}
                        price={room.price}
                        address={room.address}
                    />
                ))
            }
        </div>
    )
}
