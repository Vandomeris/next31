import Username from "@/components/Username"
import getUsersById from "@/libs/getUserById"

export default async function UserPage({ params: { id } }) {
    const user = await getUsersById(id)
    return (
        <div className="container mx-auto text-2xl">
            <Username username={user.name} />
        </div>
    )
}
