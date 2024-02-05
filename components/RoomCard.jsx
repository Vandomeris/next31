import Link from "next/link";

export default function RoomCard({ name, peopleMax, price, address }) {

    return (
        <div className="border w-80 p-5">

            <p>Название: {name}</p>
            <p>Макс. гостей: {peopleMax}</p>
            <p>Цена за сутки: {price}</p>
            <p>Адрес: {address}</p>

        </div >
    )
}
