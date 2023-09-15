

import apiGet from "@/lib/apiGet"
import { redirect } from 'next/navigation';


export default async function Page() {
  const data = await apiGet("test")

  return <>
    {data.map(user => (<div style={{ backgroundColor: user.color, width: 'auto', borderRadius: '10px', padding: '5px', margin: '5px', display: "inline-block" }} >
      <div>User: {user.name}</div>
      <div>Age: {user.age}</div>
    </div >
    ))
    }
  </>
}

