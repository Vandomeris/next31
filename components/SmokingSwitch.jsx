'use client'

import { useState } from "react"


export default function SmokingSwitch() {
    const [smoking, setSmoking] = useState('')
    return (
        <div>
            <button
                className={`border py-2 px-4 ${smoking === true ? 'bg-green-400' : null}`}
                onClick={() => {
                    setSmoking(true)
                }}
            >Курящий</button>
            <button
                className={`border py-2 px-4 ${smoking === false ? 'bg-green-400' : null}`}
                onClick={() => {
                    setSmoking(false)
                }}
            >Не курящий</button>
        </div>
    )
}
