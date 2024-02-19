'use client'

import { Button } from "./ui/button"


export default function Counter({ maxGuests, setGuests, guests }) {
    let max_guests = 20
    if (maxGuests) {
        max_guests = maxGuests
    }
    return (
        <div>
            <Button
                type="button"
                className="py-2 px-4"
                onClick={() => {
                    if (guests > 1) {
                        setGuests(prev => prev - 1)
                    }

                }}
            >-</Button>
            <span className="text-xl px-4">{guests}</span>
            <Button
                type="button"
                className="py-2 px-4"
                onClick={() => {
                    if (guests < max_guests)
                        setGuests(guests + 1)
                }}
            >+</Button>
        </div>
    )
}
