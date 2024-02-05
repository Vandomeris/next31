'use client'
import { Button } from "../ui/button"

export default function DeleteRoomButton({ id }) {
    async function handleDelete(e) {
        const id = e.target.dataset.id

        const resp = await fetch('/api/admin/rooms/delete', {
            method: 'DELETE',
            body: JSON.stringify({
                id: id
            })
        })
    }
    return (
        <Button
            onClick={handleDelete}
            data-id={id}
            className="text-2xl"
        >🗑</Button>
    )
}
