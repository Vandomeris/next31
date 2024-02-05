'use client'

import { useState } from "react"
import Counter from "./Counter"
import { Slider } from "./ui/slider"


export default function RoomFilter({ minPrice, maxPrice, setRooms }) {

    const [price, setPrice] = useState(maxPrice)
    const [guests, setGuests] = useState(2)

    async function submitHandler(e) {
        e.preventDefault()
        const resp = await fetch('/api/rooms/getRooms', {
            method: 'POST',
            body: JSON.stringify({
                price: price,
                guests: guests
            })
        })
        const result = await resp.json()
        setRooms(result)
    }

    return (
        <form onSubmit={submitHandler} className="w-full flex items-center justify-between">

            <div className="w-1/3">
                <p>Цена &lt; чем - {price}</p>
                <Slider onValueChange={(e) => {
                    setPrice(e[0])
                }} defaultValue={[maxPrice]} max={maxPrice} min={minPrice} step={1} />
            </div>

            <div className="w-1/3">
                <p>Гостей</p>
                <Counter setGuests={setGuests} guests={guests} />
            </div>

            <button
                className="border border-orange-400 px-4 py-2">Искать</button>

        </form>
    )
}
