import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="container mx-auto p-6 flex justify-between items-center">
            <div className="w-[250px]">
                <img className="w-full" src="https://secrets.tinkoff.ru/api/image/?src=https%3A%2F%2Fpublic-static.tinkoffjournal.ru%2Fbusiness-secrets%2Fuploads%2F2023%2F04%2FVTRf8XTF-3.png&w=1250&q=100" alt="" />
            </div>
            <nav className="flex gap-x-8">
                <Link
                    className="hover:text-green-400 text-2xl transition-all"
                    href="/">
                    Главная
                </Link>
                <Link
                    className="hover:text-green-400 text-2xl transition-all"
                    href="/users">
                    Пользователи
                </Link>
                <Link
                    className="hover:text-green-400 text-2xl transition-all"
                    href="/rooms">
                    Комнаты
                </Link>
            </nav>
        </header>
    )
}
