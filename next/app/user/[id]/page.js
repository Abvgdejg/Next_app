import apiGet from "@/lib/apiGet"
import { User_data } from '@/components/Users/User_data'

export default async function Page({ params: { id } }) {
    const user = await apiGet(`users/${id}`)
    return (<User_data user={user} />)
}