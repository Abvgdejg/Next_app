
import apiGet from "@/lib/apiGet"
import Link from "next/link";


export default async function Page() {
  const data = await apiGet("users")

  return <>
    {data.map(user => (
      <Link href={`/user/${user.id}`}>
        <div style={{ backgroundColor: user.color, width: 'auto', borderRadius: '10px', padding: '5px', margin: '5px', display: "inline-block" }} >
          <div>User: {user.name}</div>
          <div>Age: {user.age}</div>
        </div >
      </Link>
    ))
    }
  </>
}

