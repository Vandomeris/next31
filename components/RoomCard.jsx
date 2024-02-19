import Link from "next/link";

export default function RoomCard({ name, peopleMax, price, address, photos }) {

    return (
        <div className="border w-80 p-5">
            {
                photos.map((photo) => (
                    <img src={`/uploads/rooms/${photo.name}`} alt="" />
                ))
            }
            {/* <img className="w-full" src={`/uploads/rooms/${image}`} alt="" /> */}
            <p>Название: {name}</p>
            <p>Макс. гостей: {peopleMax}</p>
            <p>Цена за сутки: {price}</p>
            <p>Адрес: {address}</p>

        </div >
    )
}
