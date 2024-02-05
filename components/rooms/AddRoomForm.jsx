'use client'

import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"



async function handleSubmit(e) {
    e.preventDefault()

    const formData = new FormData(e.target)

    const resp = await fetch('/api/admin/user/create', {
        method: 'PUT',
        body: formData
    })
}



export default function AddRoomForm() {
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">


            <Input name="name" required type="text" placeholder="Название комнаты" />
            <Input name="maxPeople" required type="number" placeholder="Максимальное количество гостей" />
            <Input name="address" required type="text" placeholder="Адрес" />
            <Input name="price" required type="number" placeholder="Цена" />
            <Textarea name="description" required placeholder="Введите описание команты" />
            <div className="text-center">
                <Button>Добавить комнату</Button>
            </div>

        </form>
    )
}