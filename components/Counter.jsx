'use client'


export default function Counter({ maxGuests, setGuests, guests }) {
    let max_guests = 20
    if (maxGuests) {
        max_guests = maxGuests
    }
    return (
        <div>
            <span
                onClick={() => {
                    if (guests > 1) {
                        setGuests(prev => prev - 1)
                    }

                }}
            >-</span>
            <span>{guests}</span>
            <span
                onClick={() => {
                    if (guests < max_guests)
                        setGuests(guests + 1)
                }}
            >+</span>
        </div>
    )
}
