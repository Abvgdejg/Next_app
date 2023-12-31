import apiGet from "@/lib/apiGet"
import { User_card } from '@/components/Users/User_card'

export default async function Home() {
  const users = await apiGet("decks")
  return (<div className="row">{users.map(user => <User_card user={user} />)}</div>)
}
