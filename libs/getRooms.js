export default async function getRooms() {
    const response = await fetch('http://localhost:1000/rooms', {
        cache: "force-cache"
    })
    return response.json()
}
