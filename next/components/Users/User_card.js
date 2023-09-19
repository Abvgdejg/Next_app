import Link from 'next/link'

const User_card = ({ user }) => {
    return (
        <Link href={`/user/${user.id}`}>
            <div style={{ backgroundColor: user.color, width: 'auto', borderRadius: '10px', padding: '5px', margin: '5px', display: "inline-block" }} >
                <div>User: {user.name}</div>
                <div>Age: {user.age}</div>
            </div >
        </Link>
    )
}

export { User_card };