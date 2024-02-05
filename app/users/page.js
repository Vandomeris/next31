export const metadata = {
    title: 'Test client'
}


import { PrismaClient } from "@prisma/client"
import Link from "next/link"


async function getUsers() {
    const client = new PrismaClient()
    const data = await client.users.findMany({
        where: {
            age: {
                lte: 18
            }
        },
        select: {
            name: true,
            email: true,
            id: true
        }
    })
    return data

    // SELECT name, email, id
}


export default async function UsersPage() {
    const users = await getUsers()
    console.log(users);
    return (
        <ul className="container mx-auto flex flex-wrap gap-y-8 justify-between">
            {
                users.map((user) => (
                    <li key={user.id} className="border w-[24%] mx-2">
                        <Link className="p-5 block hover:bg-den4ik-blue transition-all hover:text-white hover:border-white" href={`/users/${user.id}`}>
                            <p>{user.name}</p>
                            <p>{user.email}</p>

                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}