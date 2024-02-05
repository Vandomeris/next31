'use client'
import { useState } from "react"

export default function RoomDops() {

    const [show, setShow] = useState(false)

    return (
        <div>
            <button
                onClick={() => {
                    setShow(!show)
                }}>

                {show ? 'Скрыть допы' : 'Показать допы'}

            </button>
            {show &&
                <ul>
                    <li>Кондиционер</li>
                    <li>Мини-бар</li>
                    <li>Холодильник</li>
                    <li>Халат</li>
                    <li>Сейф</li>
                    <li>Утюг</li>
                </ul>}
        </div>
    )
}
