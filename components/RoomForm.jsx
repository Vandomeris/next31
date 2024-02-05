'use client'

import { useState } from "react"

export default function RoomForm({ searchParams }) {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [status, setStatus] = useState('')

    async function handleClick(e) {
        e.preventDefault()


        const resp = await fetch('/api/test', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                phone: phone
            })
        })

        const result = await resp.json()
        setStatus(result.result)
    }

    return (
        <form className=" w-2/3 mx-auto border p-5 border-green-400">

            <h2 className="text-center text-3xl font-bold mb-5">Вы заказали:</h2>
            <div className="flex justify-center gap-x-16 mb-5">
                <p className="font-medium text-lg">{searchParams.name}</p>
                <p className="font-medium text-lg">{searchParams.price} рублей</p>
            </div>

            <input
                value={name}
                onChange={(e) => setName(e.target.value)}

                className="w-2/3 mx-auto block mb-5 p-3 border" type="text" placeholder="Ваше имя" />
            <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-2/3 mx-auto block mb-5 p-3 border" type="tel" placeholder="Ваш телефон" />

            <div className="text-center">
                <button
                    onClick={handleClick}
                    className="border py-2 px-4"
                >Отправить</button>

                {status === 'OK!'
                    ? (<p className="text-green-400">Запрос был отправлен успешно</p>)
                    : null}
            </div>

        </form >
    )
}
