import Link from 'next/link'
import { Card } from '@/components/Card'


const colors = ["blue", "red", "orange", "green", "black", "yellow"]

function Home() {
  return (
    <>
      {colors.map((color) => (
        <>
          <Card color={color} />
        </>
      ))}

    </>
  )
}

export default Home