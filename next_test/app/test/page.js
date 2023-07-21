import Link from 'next/link'

const available_tests = [1, 2, 3, 4, 5]

function Home() {
  return (
    <>
      {available_tests.map((id) => (
        <>
          <Link href={`/test/${id}`}>- Test {id} </Link><br />
        </>
      ))}

    </>
  )
}

export default Home