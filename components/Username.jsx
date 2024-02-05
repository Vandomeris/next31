

'use client'

import { useState } from "react"

export default function Username({ username }) {

    const [Username, setUsername] = useState(username)

    return (
        <div>
            <input
                className="border p-4"
                type="text"
                value={Username}
                onChange={
                    (e) => {
                        setUsername(e.target.value)
                    }
                }
            />
        </div>
    )
}
